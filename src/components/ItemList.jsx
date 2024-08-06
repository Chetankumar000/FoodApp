import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { nanoid } from "@reduxjs/toolkit";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="restItem"
          key={nanoid()}
          className="px-2 py-3 m-2 border-gray-300 border-b-2 items-center text-left flex justify-between"
        >
          <div className="py-2  w-9/12">
            <span>{item.card.info.name} - </span>
            <span>
              ₹{" "}
              {item.card.info.price / 100 ||
                item.card.info.finalPrice / 100 ||
                100}{" "}
            </span>
            <p className="text-xs mt-2">{item.card.info.description}</p>
          </div>
          <div className="">
            <div className="absolute">
              <button
                onClick={() => handleAddItems(item)}
                className="p-1 mx-11 rounded-md bg-black text-white text-xs"
              >
                Add +
              </button>
            </div>

            <img
              className="w-32 rounded-md shadow-md h-28 p-1"
              src={CDN_URL + item.card.info.imageId}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
