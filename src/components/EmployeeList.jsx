import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
export const EmployeeList = () => {

const [employees,setEmploy]=useState([]);


useEffect(()=>{
getData();
},[]);

async function getData(){
const data=await fetch("http://localhost:8080/employee").then(d=>d.json());

setEmploy(data);

}


  return (
    <div className="list_container" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",marginTop:"30px"}}>
      {employees.map((e)=>(






<div key={employees.id} className="employee_card">


<Link to={`/employees/${e.id}`}>

<img className="employee_image" src={e.image} />
<br/>
<span className="employee_name">{e.employee_name}</span>
<br/>
<span className="employee_title">{e.title}</span>
</Link>
</div>
      ))}
      
    </div>
  );
};
