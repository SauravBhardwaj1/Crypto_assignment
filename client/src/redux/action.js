import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"


export const loginSuccess = (payload) =>{
    return {type:LOGIN_SUCCESS,payload}
}

export const loginfaliure = () =>{
    return {type:LOGIN_FAILURE}
}