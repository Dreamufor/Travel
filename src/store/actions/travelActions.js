export const createTravel = (travel) => {
    // return {
    //     type : 'ADD_TRAVEL',
    //     travel: travel 
    // }
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('travels').add({
            ...travel,
            authorFirstName: ' Mumu ',
            authorLastName: ' Zhang ',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_TRAVEL' , travel });
        }).catch((err) => {
            dispatch({type : 'CREATE_TRAVEL_ERROR', err});
        })
       
    }
};