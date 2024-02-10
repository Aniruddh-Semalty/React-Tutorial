import React from 'react'
import { itemImgUrl } from "../utils/constants";

function RestaurantListItems({item}) {
  return (
    <div>
    {item.card.card.itemCards.map((item) => (
      
      <div className="my-6">
       <RestaurantItem key={item.card.info.id} item={item} />
      </div>
    ))}
  </div>
  )
}

const RestaurantItem = ({ item }) => {
    return (
      <>
        <div className=" border-gray-400 border-b-2 flex justify-between">
          <div className="w-3/4 py-2">
            <span className="text-bold">{item.card.info.name}</span>
            <span>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="">
              {item.card.info.imageId? <img
              className="w-24 h-24 p-2 rounded-xl"
              src={itemImgUrl + item.card.info.imageId}
            />:null} 
           
          </div>
        </div>
      </>
    );
  };


export default RestaurantListItems;