import { createContext, useState } from "react";


export const TotalNewContext=createContext();


export const TotalNewContextProvider=({children})=>{
const [New,setNew]=useState(0);


async function handleNew(inc){
    
   setNew(New+inc);    
}
return (<TotalNewContext.Provider value={{New,handleNew}}>{children}</TotalNewContext.Provider>)


}