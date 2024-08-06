import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestInfo(json?.data);
  };
  console.log("hook");

  return restInfo;
};

export default useRestMenu;
