import { useContext, useEffect } from "react";
import { TotalContext } from "../Contexts/TotalContext";
import { TotalNewContext } from "../Contexts/Totalnew";
import { TotalPromotedContext } from "../Contexts/Totalpromoted";
import { TotalTerminatedContext } from "../Contexts/Totalterminated";

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created


  const {New}=useContext(TotalNewContext);
  const {Terminated}=useContext(TotalTerminatedContext);
  const {Promoted}=useContext(TotalPromotedContext);
    const {Total,handleTotal}=useContext(TotalContext);
useEffect(()=>{
  handleTotal();


})

  return (
    <>
      <h3 className="welcome" style={{marginLeft:"20%"}}>Welcome To employee management system</h3>
      <div className="home" style={{marginLeft:"20%"}}>
        <span>Stats</span>
        <div>
          Total Employees:<span className="totalemp">{Total}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{Terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{Promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{New}</span>
        </div>
      </div>
    </>
  );
};
