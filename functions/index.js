const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello Little Mu");
// });

const createNotification = ( notification => {
    return admin.firestore().collection('notifications')
            .add(notification)
            .then(doc => console.log('notification added', doc))
})


exports.travelCreated = functions.firestore
    .document('travels/{travelId}')
    .onCreate(doc => {
        const travel = doc.data();
        const notification = {
            content : 'Added a new journey',
            user: `${travel.authorFirstName} ${travel.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })


exports.userJoined = functions.auth.user()
    .onCreate(user => {

    return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const newUser = doc.data();
            const notification = {
                content : 'Joined the Traverse',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification);

        })
})