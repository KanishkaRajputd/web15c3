import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const Logout = () => {
  const  {handleAuth}=useContext(AuthContext);
  const navigate=useNavigate();
  // log user out. it's just an inmemory value in context api
  return <button style={{height:"40px",marginLeft:"40%",backgroundColor:"teal"}} onClick={()=>{
    handleAuth(false);
    navigate("/" ,{replace:true});
    }}
    >Logout</button>
};
