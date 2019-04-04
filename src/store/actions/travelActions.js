export const createTravel = (travel) => {
    // return {
    //     type : 'ADD_TRAVEL',
    //     travel: travel 
    // }
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('travels').add({
            ...travel,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_TRAVEL' , travel });
        }).catch((err) => {
            dispatch({type : 'CREATE_TRAVEL_ERROR', err});
        })
       
    }
};