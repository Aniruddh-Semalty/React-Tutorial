import { useState,useEffect } from "react";
import CardComponent from "./CardComponent";



const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);

  useEffect(()=>{
    fetchAndPopulate();
  },[]);

  const fetchAndPopulate=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.27232867765073&lng=78.09663232415915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData=await data.json();
    setrestaurantList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);


  }


  return (
    <div className="body-container">
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Type to search restaurants at your location"
        />
        <div className="top-rated-btn-container">
          <button
            className="top-rated-btn"
            onClick={() => {
              const topRestaurants = restaurantList.filter((restaurant) => {
                return restaurant.info.avgRating > 4.3;
              });
              setrestaurantList(topRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <button
            className="all-restaurants-btn"
            onClick={() => {
              setrestaurantList(resList);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <CardComponent key={restaurant.info.id} restaurantObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
