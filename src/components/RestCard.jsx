import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestCard = ({ restData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    restData?.info;
  const data = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-64 bg-gray-100 rounded-md hover:bg-gray-200"
    >
      <img
        className="rest-img rounded-md"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold p-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{sla.slaString}</h4>
      <h4>{data.logUser}</h4>
    </div>
  );
};

//Higher order component

//input - RestCard ==> restuarantCardPromoted

export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestCard {...props} />
        <label className="absolute top-0 left-4 bg-black text-white rounded-md p-2 text-xs">
          Recommended
        </label>
      </div>
    );
  };
};

export default RestCard;
