import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemImgUrl } from "../utils/constants";

import { clearCart } from '../utils/Store/cartSlice';

function Cart() {
    const dispatch=useDispatch();
    
    
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    const cartItems=useSelector((store)=>store.cart.items);


  return cartItems.length===0?<div>Empty cart please add items first</div>:(
  <div  className="w-1/2 m-auto flex-col justify-center">
  <div>
    <h1 className='font-bold text-center text-2xl my-4'>Cart</h1>
    </div>
    <div className='flex justify-center'>
   <button className="bg-[#d54f1fcf] w-20 h-10 rounded-lg " onClick={handleClearCart}>Clear cart</button>
    </div>
  {cartItems.map((item)=>{
   return <ListItems item={item}/>
  })
  }
  </div>
  )
}

const ListItems=({item})=>{
   
    return (
        <div>
        <div  data-testid="cartItem" className=" border-gray-400 border-b-2 flex justify-between">
        <div  className="w-3/4 py-2">
        
          <span className="text-bold">{item?.item?.card?.info?.name}</span>
          <span>
            ₹{" "}
            {item?.item?.card?.info?.price
              ? item?.item?.card?.info?.price / 100
              : item?.item?.card?.info?.defaultPrice / 100}
          </span>
          <p className="text-xs">{item?.item?.card?.info?.description}</p>
        </div>
        <div className="">
            {item.item.card.info.imageId? <img
            className="w-24 h-24 p-2 rounded-xl"
            src={itemImgUrl + item.item.card.info.imageId}
          />:null}
         
        </div>
       
      </div>
      </div>
      )
}

export default Cart