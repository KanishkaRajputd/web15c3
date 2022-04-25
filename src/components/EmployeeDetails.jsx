import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {AuthContext}  from "../Contexts/AuthContext";
import { TotalPromotedContext } from "../Contexts/Totalpromoted";
import { TotalTerminatedContext } from "../Contexts/Totalterminated";

export const EmployeeDetails = () => {
const [employee,setEmployee]=useState({});
const {isAuth}=useContext(AuthContext);
const {handlePromoted}=useContext(TotalPromotedContext);
const {handleTarminated}=useContext(TotalTerminatedContext);
const {id}=useParams();

useEffect(()=>{
getData();
},[])
async function getData(){
const data=await fetch(`http://localhost:8080/employee/${id}`).then((d)=>d.json());
setEmployee(data);



}

if(!isAuth){

  return <Navigate to={"/login"}/>
}

  return (
    <div className="user_details">
      <img className="user_image"  src={employee.image}/>
      <h4 className="user_name">{employee.employee_name}</h4>
      <span className="user_salary">${employee.salary}</span>
      <br/>
      <span className="tasks">{employee.tasks}
      <br/>
      
      </span>
      Status: <b className="status">{employee.status}</b>
      Title: <b className="title">{employee.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire" onClick={()=>{
        handleTarminated(1);
      }}>Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote" onClick={()=>{
        handlePromoted(1);
      }}>promote</button>
    </div>
  );
};
