import { createContext, useState } from "react";


export const TotalPromotedContext=createContext();


export const TotalPromotedContextProvider=({children})=>{
const [Promoted,setPromoted]=useState(0);

 function handlePromoted(inc){
     
    setPromoted(Promoted+inc);
}
return (<TotalPromotedContext.Provider value={{Promoted,handlePromoted}}>{children}</TotalPromotedContext.Provider>);


}