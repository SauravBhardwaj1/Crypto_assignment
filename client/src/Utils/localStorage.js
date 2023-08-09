export const setlocalSt = (key,data) =>{
    localStorage.setItem(`${key}`,data)
   }
   
   
   export const getlocalSt = (key) =>{
     let value = localStorage.getItem(key)
       return value
    }