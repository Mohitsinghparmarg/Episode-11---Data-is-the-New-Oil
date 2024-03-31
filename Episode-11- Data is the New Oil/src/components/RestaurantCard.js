import { useContext } from "react";
import { CDN_URL } from "../utills/constants";
import UserContext from "../utills/UserContext";


const RestaurantCard = (props) => {
    const { resData } = props;

    const {loggedInUser} = useContext(UserContext);
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={ 
            CDN_URL+cloudinaryImageId
          }
        />
        <h3 className="font-bold px-2 py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <h4>User:{loggedInUser}</h4>
      </div>
    );
  };





export default RestaurantCard;