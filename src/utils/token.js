export var getToken = () => {
    let token = null;

    try {
        token = window.localStorage.getItem('token')
    }
    catch (e) {
        console.log('get token error!');
    }

    return token;
}

export var setToken = (token) => {
    try {
        window.localStorage.setItem('token', token);
    }
    catch (e) {
        console.log('set token error!');
    }
}
