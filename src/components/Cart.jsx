import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItem());
  };

  return (
    <div className="">
      <div className="text-center ">
        <h1 className="font-bold text-2xl p-2 m-4">Cart</h1>
        <button
          onClick={handleClear}
          className="bg-black text-white p-2 rounded-md mb-2"
        >
          Clear
        </button>
      </div>
      <div className="w-9/12 rounded-sm m-auto bg-gray-100">
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default Cart;
