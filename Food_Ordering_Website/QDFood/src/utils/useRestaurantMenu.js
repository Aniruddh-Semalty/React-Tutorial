import { RES_MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resid) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData(resid);
  }, []);
  
async function fetchData(resid) {
    const data = await fetch(RES_MENU_URL + resid);
    const jsonData = await data.json();
    setMenuData( jsonData.data);
  }
  return menuData;
};
export default useRestaurantMenu;

