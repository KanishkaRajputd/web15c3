import { createContext, useState } from "react";

export const TotalContext=createContext();


export const TotalContextProvider=({children})=>{
const [Total,setTotal]=useState(0);


async function handleTotal(){
    const data=await fetch("http://localhost:8080/employee").then(d=>d.json());
    setTotal(data.length);
console.log(data);

}

return (<TotalContext.Provider value={{Total,handleTotal}}>{children}</TotalContext.Provider>);


}