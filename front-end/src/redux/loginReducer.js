const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_PUBLIC_KEY = 'SET_PUBLIC_KEY';
const SET_USER_LEVEL = 'SET_USER_LEVEL';
const SET_EMAIL = 'SET_EMAIL';
const COMPLETE_MATCH = 'Match complete';
const INVALID_COMBO = "Invalid email and private key combination";
const ADMIN_LEVEL = 2;
const fakePublicKey = "1234567890";


export function login(email, private_key) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, private_key, callBackArray => {
            if (callBackArray[0] === COMPLETE_MATCH) {
                dispatch(setLoginSuccess(true));
                dispatch(setLoginPending(false));
                dispatch(setPublicKey(callBackArray[1]));
                dispatch(setUserLevel(callBackArray[2]));
                dispatch(setEmail(callBackArray[3]));


            } else {
                dispatch(setLoginError(callBackArray[0]));
                dispatch(setLoginPending(false));


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

function setLoginSuccess(isLoginSuccess) {
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

//FAKE API FUNCTION
function callLoginApi(email, private_key, callback) {
    if (email === "test" && private_key === "testKey") {
        let callBackArray = [];
        callBackArray[0] = COMPLETE_MATCH;
        callBackArray[1] = fakePublicKey;
        callBackArray[2] = ADMIN_LEVEL;
        callBackArray[3] = email;
        return callback(callBackArray);
    } else {
        let callbackArray = [];
        callbackArray[0] = INVALID_COMBO;
        return callback(callbackArray);
    }
}

// REAL API FUNCTION (SERVER CURRENTLY OFFLINE)
// function callLoginApi(email, private_key, callback) {
//     setTimeout(() => {
//         const myHeaders = new Headers();
//         myHeaders.append('Content-Type', 'application/json; charset=utf-8');
//         const link = 'https://xlogchain.nl:3000/users/login/';
//         fetch(link, {
//             method: 'POST',
//             headers: myHeaders,
//             body: JSON.stringify({email: email, private_key: private_key}
//             )
//         }).then(response => {
//             if (!response.ok) {
//                 return callback(new Error('Unable to get a 200 status from server'));
//             }
//             return response.json();
//         }).then(json => {
//             if (json.message === COMPLETE_MATCH) {
//                 let callbackArray = [];
//                 callbackArray[0] = json.message;
//                 callbackArray[1] = json.public_key;
//                 callbackArray[2] = json.user_level;
//                 callbackArray[3] = email;
//                 return callback(callbackArray);
//             } else {
//                 console.log(callbackArray[0])
//                 let callbackArray = [];
//                 callbackArray[0] =  INVALID_COMBO;
//                 return callback(callbackArray);
//             }
//
//         }).catch(err => {
//             let callbackArray = [];
//             callbackArray[0] =  INVALID_COMBO;
//             return callback(callbackArray);
//         });
//     })
// }

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