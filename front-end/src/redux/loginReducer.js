const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_PUBLIC_KEY = 'SET_PUBLIC_KEY';
const SET_USER_LEVEL = 'SET_USER_LEVEL';
const SET_EMAIL = 'SET_EMAIL';


export function login(email, private_key) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, private_key, error => {
            dispatch(setLoginPending(false));
            if (!error[0]) {
                dispatch(setLoginSuccess(true));
                dispatch(setPublicKey(error[1]));
                dispatch(setUserLevel(error[2]));
                dispatch(setEmail(error[3]));

            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess, public_key, user_level) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };

}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

function setPublicKey(public_key) {
    return {
        type: SET_PUBLIC_KEY,
        public_key
    }
}

function setUserLevel(user_level) {
    return {
        type: SET_USER_LEVEL,
        user_level
    }
}

function setEmail(email) {
    return {
        type: SET_EMAIL,
        email
    }
}

function callLoginApi(email, private_key, callback) {
    console.log(email, private_key);
    setTimeout(() => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json; charset=utf-8');
        const link = 'https://xlogchain.nl:3000/users/login/';
        fetch(link, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({email: email, private_key: private_key}
            )
        }).then(response => {
            if (!response.ok) {
                console.log('allllloooo' + response);
                return callback(new Error('Invalid email and password'));
            }
            return response.json();
        }).then(json => {
            console.log("message:" + json.message);
            if (json.message === "Match complete") {
                localStorage.setItem('user', "logged_in");
                let callbackArray = [];
                callbackArray[0] = null;
                callbackArray[1] = json.public_key;
                callbackArray[2] = json.user_level;
                callbackArray[3] = email;
                return callback(callbackArray);
            } else {
                return callback(new Error('Invalid email and password'));
            }

        }).catch(err => {
            return callback(new Error(err))
        });
    })
}

//reducer to make changes to Redux store
export default function reducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    public_key: "",

}, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });

        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess,
            });
        case SET_USER_LEVEL:
            return Object.assign({}, state, {
                user_level: action.user_level
            });
        case SET_PUBLIC_KEY:
            return Object.assign({}, state, {
                public_key: action.public_key
            });
        case SET_EMAIL:
            return Object.assign({}, state, {
                email: action.email
            });

        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });

        default:
            return state;
    }
}