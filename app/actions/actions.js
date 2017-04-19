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