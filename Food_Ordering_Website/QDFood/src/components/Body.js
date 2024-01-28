import { useState } from "react";
import CardComponent from "./CardComponent";

import resList from "../utils/api_data";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList);
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
