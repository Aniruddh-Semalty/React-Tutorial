import { useState, useEffect, useContext } from "react";
import CardComponent, { PopularCardComponent } from "./CardComponent";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import userContext from "../utils/userContext.js";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.27232867765073&lng=78.09663232415915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setrestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const PopularRestro = PopularCardComponent(CardComponent);

  //conditional rendering
  //show shimmer effect until your api data is not rendered
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Sorry,you are not connected to internet</h1>;
  }

  return restaurantList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container">
      <div className="flex my-6 justify-center items-center">
        <input
          className="border-2 w-[600px] h-[60px]"
          type="text"
          placeholder="Type to search restaurants at your location"
          value={searchText}
          data-testid="searchInputBox"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border-2 w-32 m-2 h-[60px] hover:bg-[#d54f1fcf] hover:text-white"
          onClick={async () => {
            const searchRestaurants = restaurantList.filter((restaurant) => {
              const res = restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
              return res;
            });

            setFilteredRestaurants(searchRestaurants);
          }}
        >
          Search
        </button>
        <div className="top-rated-btn-container ">
          <button
            className="border-2 w-32 m-2 h-[60px] hover:bg-[#d54f1fcf] hover:text-white"
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
            className="border-2 w-32 h-[60px] hover:bg-[#d54f1fcf] hover:text-white"
            onClick={() => {
              setFilteredRestaurants(restaurantList);
            }}
          >
            All Restaurants
          </button>
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="type"
            className="border-2 w-[100px] h-[60px] p-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <PopularRestro restaurantObj={restaurant} />
            ) : (
              <CardComponent
                key={restaurant.info.id}
                restaurantObj={restaurant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
