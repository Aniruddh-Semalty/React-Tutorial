import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import {useParams} from "react-router-dom";

import {itemImgUrl} from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resid}=useParams();
    const menu=useRestaurantMenu(resid);  //custom hook
 

  return menu === null ? (
    <ShimmerUi />
  ) : (
    <div>
      <MenuHeader menu={menu} />
      <MenuBody menu={menu} />
    </div>
  );
};

const MenuHeader = ({ menu }) => {
  const details = menu.cards[0].card?.card?.info;
  return (
    <div className="restaurant-details-container">
      <div>
        <h3>{details.name}</h3>
        <h4>{details.cuisines.join(", ")}</h4>
        <h5>
          {details.areaName},{details.sla.lastMileTravelString},
          {details.avgRating} stars
        </h5>
        <h5>
          {details.sla.minDeliveryTime}-{details.sla.maxDeliveryTime} minutes{" "}
          {details.costForTwoMessage}
        </h5>
      </div>
    </div>
  );
};

const MenuBody = ({ menu }) => {
  const details = menu.cards[2].groupedCard.cardGroupMap.REGULAR;
  const Title = details.title;
  const menuType = details.cards.filter((item) => {
    return item.card.card.itemCards != undefined;
  });


  return (
    <div className="menu-container">
    <div>
      {menuType.map((item) => (
        <div className="menu-type-container">
         <h3> {item.card.card.title}</h3>
          {item.card.card.itemCards.map((item) => (
            
            <RestaurantItem item={item} />
            
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

const RestaurantItem = ({ item }) => {
 
  return (
    <div className="menu-card-container">
        <div className="card-details-container">
      <h4>{item.card.info.name}</h4>
      <h4>Price Rs.{item.card.info.price / 100}</h4>
      <h5>{item.card.info.description}</h5>
      </div>
      <div className="card-img-container">
      
      <img src={itemImgUrl + item.card.info.imageId}></img>
      </div>
    </div>
  );
};
export default RestaurantMenu;
