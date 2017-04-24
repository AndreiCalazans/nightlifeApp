

export var UserReducer = (state = {}, action) => {
    switch (action.type) {
       
        case "USER_LOGGED":
         
            return action.Profile
            
        default:
            return state;
    }
}

export var cityToSearchReducer = (state = '' , action) => {
    switch (action.type) {
        case 'CITY':
     
            return action.city;

        default:
            return state;
    }
}

export var BarsReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_BARS":
            return action.bars
            
        default:
            return state;
    }
}

export var isLoggedReducer = (state = false , action) => {
    switch (action.type) {
        case 'IS_LOGGED':
            return action.isLogged
        default:
            return state;
    }
}