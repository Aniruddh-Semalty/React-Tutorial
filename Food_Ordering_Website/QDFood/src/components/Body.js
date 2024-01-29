import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAndPopulate();
  }, []);

  const fetchAndPopulate = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.27232867765073&lng=78.09663232415915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //optional chaining i.e(?.)
    setrestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  //show shimmer effect until your api data is not rendered

  return restaurantList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container">
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Type to search restaurants at your location"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searchRestaurants = restaurantList.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurants(searchRestaurants);
          }}
        >
          Search
        </button>
        <div className="top-rated-btn-container">
          <button
            className="top-rated-btn"
            onClick={() => {
              const topRestaurants = restaurantList.filter((restaurant) => {
                return restaurant.info.avgRating > 4.3;
              });
              setFilteredRestaurants(topRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <button
            className="all-restaurants-btn"
            onClick={() => {
              setFilteredRestaurants(restaurantList);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <CardComponent key={restaurant.info.id} restaurantObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
