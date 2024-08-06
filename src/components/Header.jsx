import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 xl:bg-yellow-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="m-4 flex p-4">
          <li className="px-6">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
            <li className="px-3 text-xl font-bold">
              Cart ({cartItems.length} Items)
            </li>
          </Link>
          <button
            className="px-3"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3">{data.logUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
