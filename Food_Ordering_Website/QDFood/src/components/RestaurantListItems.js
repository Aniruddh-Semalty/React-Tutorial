import React from 'react'
import { itemImgUrl } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/Store/cartSlice';
import { UseSelector } from 'react-redux';
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
  const itemsOfCart=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
 
  const handleCartAddItems=(item)=>{
    dispatch(addItem({item}));
   
    
  }
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
            <div className='flex justify-center m-1'><button className='bg-[#d54f1fcf] rounded-lg text-white' onClick={()=>{handleCartAddItems(item)}}>Add+</button></div>
           
          </div>
        </div>
      </>
    );
  };


export default RestaurantListItems;