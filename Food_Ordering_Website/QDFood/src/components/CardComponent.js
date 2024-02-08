import { IMG_URL } from "../utils/constants";

const CardComponent = (props) => {
    //let us first destructure the object
    const { restaurantObj } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
      restaurantObj.info;
  
    return (
      <div className="m-5 p-2 h-[600px] w-[300px] border border-black">
        <img
          className="h-2/4 w-full rounded-lg"
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

  export const PopularCardComponent=(CardComponent)=>{
    return (props)=>{
      return (
        <div>
          <label className="bg-black text-white">Most Popular</label>
          <CardComponent restaurantObj={props.restaurantObj}/>
        </div>
      )
    }
  };
  export default CardComponent;