import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

import MenuType from "./MenuType";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const menu = useRestaurantMenu(resid); //custom hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Sorry,you are not connected to internet</h1>;
  }

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
    <div className="flex justify-center m-6 p-6">
      <div>
        <h3 className="font-bold text-2xl my-6">{details.name}</h3>
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

export const MenuBody = ({ menu }) => {
  const details = menu.cards[2].groupedCard.cardGroupMap.REGULAR;
  const Title = details.title;

  const menuType = details.cards.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  const [expandMenuTypes, setExpandMenuTypes] = useState(false);
  const clickHandler = () => {
    setExpandMenuTypes(!expandMenuTypes);
  };
  return (
    <>
      <div
        className="w-1/3 bg-gray-300 shadow-lg p-4 mx-auto my-4"
        onClick={clickHandler}
      >
        {/* accordian header */}
        <div className="flex justify-between">
          <span className="font-bold text-lg">Menu Types </span>
          <button>🔽</button>
        </div>
      </div>
      {expandMenuTypes && <MenuTypes menuType={menuType} />}
    </>
  );
};

function MenuTypes({ menuType }) {
  const [expandIndex, setExpandIndex] = useState(null);
  return (
    <div className="">
      <div className="">
        {menuType.map((item, index) => (
          <MenuType
            key={item?.card?.card?.title}
            item={item}
            showItems={index === expandIndex ? true : false}
            expandIndexState={() => {
              //lifting the state up
              setExpandIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
