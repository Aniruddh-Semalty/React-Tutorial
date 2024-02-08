import {useState,useEffect} from "react";

const useGetResaurants=()=>{
    const [restaurants,setRestaurants]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.27232867765073&lng=78.09663232415915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json();
        setRestaurants(  jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
    }
    

    return restaurants;


}
export default useGetResaurants;

