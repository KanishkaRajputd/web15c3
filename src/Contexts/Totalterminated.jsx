import { createContext, useState } from "react";


export const TotalTerminatedContext=createContext();


export const TotalTerminatedContextProvider=({children})=>{
const [Terminated,setTerminated]=useState(0);

 function handleTerminated(inc){
     
    setTerminated(Terminated+inc);
}
return <TotalTerminatedContext.Provider value={{Terminated,handleTerminated}}>{children}</TotalTerminatedContext.Provider>


}