import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType"


const initialState ={
   isAuth:false,
   token:""
}

export const authReducer = (state = initialState, {type,payload}) =>{
   switch(type){
       case LOGIN_SUCCESS:{
        return {...state, isAuth:true,token:payload.token}
       } 
       
       case LOGIN_FAILURE:{
        return {...state, isAuth:false}
       }

       default :{
        return state
       }
   }
}