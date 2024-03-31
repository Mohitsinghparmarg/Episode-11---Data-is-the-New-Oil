import { LOGO_URL } from "../utills/constants";
import { useState,useContext} from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";


 const Header = () => {


   const [btnNameReact,setBtnNameReact] = useState("Login");

      const onlineStatus = useOnlineStatus();
      
       const {loggedInUser} = useContext(UserContext);
       console.log(loggedInUser);
   


    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-8">
            <li className="px-4">
               Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4"> 
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="login"
              onClick={() =>{
                btnNameReact === "Login"? 
                setBtnNameReact("Logout"):
                setBtnNameReact("Login"); 
              }}
              >
              {btnNameReact}</button>
              <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

