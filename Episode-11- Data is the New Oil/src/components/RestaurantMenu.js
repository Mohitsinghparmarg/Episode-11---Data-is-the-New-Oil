import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
       

       const {resId} = useParams();

      
       const resInfo = useRestaurantMenu(resId);


      const [showIndex,setShowIndex] = useState(0);

  
      if(resInfo === null) 
      return <Shimmer/>

      const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

      console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      
      const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
                      c.card?.["card"]?.["@type"] === 
                      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                  );

              // console.log(category);

  return (
    <div className="text-center">
            
                 <h1 className="font-bold my-6 text-2xl">{resInfo?.cards[2].card?.card?.info?.name}</h1>
                 <h2 className="font-bold text-lg">{resInfo?.cards[2].card?.card?.info?.cuisines.join(",") }</h2>
                 <h3 className="font-bold text-lg">{resInfo?.cards[2].card?.card?.info?.costForTwoMessage}</h3>
                 
               {
                  category.map((category,index) =>
                     // controlled component     
                  <RestaurantCategory
                              key={category?.card?.card?.title}
                               data={category?.card?.card}
                               showItems={index === showIndex ? true : false}
                               setShowIndex = {() => setShowIndex(index)}
                        />
                      )
               }
                 

    </div>
  )
}

export default RestaurantMenu;