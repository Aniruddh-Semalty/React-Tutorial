import CardComponent from "./CardComponent"; 
import restaurantList from "../utils/api_data";
 const Body = () => {
    return (
      <div className="body-container">
        <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Type to search restaurants at your location"
          />
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