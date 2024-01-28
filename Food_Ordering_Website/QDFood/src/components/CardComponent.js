import { IMG_URL } from "../utils/constants";
const CardComponent = (props) => {
    //let us first destructure the object
    const { restaurantObj } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
      restaurantObj.info;
  
    return (
      <div className="restaurant-card">
        <img
          className="restaurant-img"
          src={IMG_URL
            +
            cloudinaryImageId
          }
          alt="image"
        ></img>
        <h3>{name}</h3>
        <h4>
          {avgRating} Stars | {sla.deliveryTime} mins
        </h4>
        <h4>
          {cuisines.join(", ")} | {areaName}
        </h4>
      </div>
    );
  };
  export default CardComponent;