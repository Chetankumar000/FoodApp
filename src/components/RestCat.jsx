import ItemList from "./ItemList";
import { useState } from "react";

const RestCat = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="">
      <div className="w-2/3  mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          onClick={() => {
            handleClick();
          }}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestCat;
