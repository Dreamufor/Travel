const initState = {
    travels: [
        {id:'1', title:'Taranaki', content: 'It is a great place for holiday'},
        {id:'2', title:'Hamilton', content: 'It is a great place for holiday'},
        {id:'3', title:'Auckland', content: 'It is a great place for holiday'},
        {id:'4', title:'Wanaka', content: 'It is a great place for holiday'}
    ]
}

const travelReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_TRAVEL':
            console.log('created travel', action.travel);
            return state;

        case 'CREATE_TRAVEL_ERROR':
            console.log('create project error', action.err);
            return state;
        
        default:
            return state
    }
}

export default travelReducer;