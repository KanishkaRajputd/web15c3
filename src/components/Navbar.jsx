import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export const Navbar = () => {


  const {isAuth}=useContext(AuthContext);
  return (
    <div className="navbar" style={{height:"30px",width:"50%",marginLeft:"25%",display:"flex",justifyContent:"space-between"}}>
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to={isAuth?"/logout":"/login"}>
        {isAuth?"Logout":"Login"}
      </Link>

     
    </div>
  );
};
