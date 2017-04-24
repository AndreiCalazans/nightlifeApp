export var loggedUser = (profile) => {
    return {
        type: "USER_LOGGED",
        Profile: profile
    }
};

export var isLogged = (isLogged) => {
    return {
        type: 'IS_LOGGED',
        isLogged
    }
}

export var cityToSearch = (city) => {
    return {
        type: 'CITY',
        city
    }
}

export var updateBars = (bars) => {
    return {
        type: 'UPDATE_BARS',
        bars
    }
}