import RestCard, { withPromotedLabel } from "./RestCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { REST_API } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestCardPromoted = withPromotedLabel(RestCard);
  const { logUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);

    const json = await data.json();
    setListOfRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const SearchItems = () => {
    const sItems = listOfRest.filter((res) => {
      return res.info.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilterRest(sItems);
  };

  if (onlineStatus == false) {
    return (
      <h1>
        Looks like you're offline !! Please check your internet connection
      </h1>
    );
  }
  console.log(listOfRest);

  return listOfRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            data-testid="searchInput"
            className="border border-solid border-black p-1 rounded-md"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={SearchItems}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="filter-btn bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => {
              setFilterRest(
                listOfRest.filter((Rest) => Rest.info.avgRating > 4)
              );
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border rounded-lg border-black p-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={logUser}
          />
        </div>
      </div>
      <div className="rest-container flex flex-wrap mx-4 items-center">
        {filterRest.map((obj) => (
          <Link to={"/restaurants/" + obj.info.id} key={obj.info.id}>
            {obj.info.avgRating > 4.5 ? (
              <RestCardPromoted restData={obj} />
            ) : (
              <RestCard restData={obj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
