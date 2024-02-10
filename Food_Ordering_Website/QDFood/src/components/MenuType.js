import RestaurantListItems from "./RestaurantListItems"
export default function MenuType({item,showItems,expandIndexState})
{
   const clickHandler=()=>{
    expandIndexState();
   }
  return(
     <div>
            <div className="w-1/2 bg-gray-300 shadow-lg p-4 mx-auto my-4" onClick={clickHandler}>
              {/* accordian header */}
              <div className="flex justify-between">
                <span className="font-bold text-lg">
                  {item?.card?.card?.title} (
                  {item?.card?.card?.itemCards.length}) 
                </span>
                <button>🔽</button>
              </div>
              {/* accordian body*/}
              
              {showItems && <RestaurantListItems  item={item} />}
            </div>
          </div>

  )
}