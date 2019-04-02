export const createTravel = (travel) => {
    // return {
    //     type : 'ADD_TRAVEL',
    //     travel: travel 
    // }
    return (dispach, getState) => {
        //make async call to database
        dispach({type: 'CREATE_TRAVEL' , travel });
    }
};