import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import RestCat from "./RestCat";

const RestMenu = () => {
  const { resId } = useParams();
  const json = useRestMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // Guard clause for null or undefined JSON response
  if (!json) {
    return <Shimmer />;
  }

  const getItems = () => {
    const cardGroups =
      json?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const index = cardGroups.findIndex(
      (card) => card.card.card.itemCards !== undefined
    );

    const itemCardIndex = cardGroups.length > 1 ? 1 : 2; // Use the appropriate index
    return cardGroups[index]?.card?.card?.itemCards || [];
  };

  const categories =
    json?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  const Items = getItems();
  const info = json?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center items-center mb-4">
        <img
          className="w-60 rounded-md shadow-md "
          src={
            info.cloudinaryImageId
              ? CDN_URL + info.cloudinaryImageId
              : "default-image-url"
          }
          alt={info.name || "Restaurant"}
        />
      </div>

      <h1 className="text-2xl font-bold mb-2">
        {info.name || "Restaurant Name"}
      </h1>

      <h4 className="text-md mb-1 font-bold">
        {info.cuisines?.join(", ") || "Cuisine Information"} -{" "}
        {info.costForTwoMessage || "Cost for Two"}
      </h4>
      {/* <h4 className="text-lg mb-1">
        {info.avgRating ? `${info.avgRating} Rating` : "Rating Not Available"}
      </h4>
      <h4 className="text-lg">
        {info.sla?.slaString || "Delivery Time Information"}
      </h4> */}

      {categories.map((cat, index) => (
        <RestCat
          key={cat.card.card.title}
          data={cat?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index == showIndex ? null : index);
          }}
        />
      ))}
    </div>
  );
};

export default RestMenu;
