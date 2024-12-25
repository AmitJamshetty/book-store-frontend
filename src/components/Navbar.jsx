import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart page", href: "/cart" },
  { name: "check out", href: "/checkout" },
];

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  return (
    <header className="md:w-4/5 mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <HiMiniBars3CenterLeft className="text-xl" />
          </Link>

          {/* Search input */}
          <div className="flex items-center bg-[#EAEAEA] space-x-2 sm:w-72 w-40 px-4 py-2">
            <IoSearchOutline className="text-lg" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent text-sm outline-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-6 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen((prev) => !prev)}>
                  <img
                    src={avatarImg}
                    alt="user-img"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item, index) => (
                        <Link
                          to={item.href}
                          key={index}
                          className="block px-4 py-2 text-sm hover:bg-[#EAEAEA]"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <li className="px-4 py-2 text-sm">{item.name}</li>
                        </Link>
                      ))}
                      <li
                        className="block px-8 py-4 text-sm hover:bg-[#EAEAEA] cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary flex items-center space-x-2 sm:px-6 p-1 px-4 py-2 rounded-sm"
          >
            <HiOutlineShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
