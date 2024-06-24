"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import Notification from "../global/Notification";
import CartList from "../cart/CartList";
import CartContext from "@/context/CartContext";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const { products: cartItems } = useContext(CartContext);
  const router = useRouter();

  const [toggleSearch, setToggleSearch] = useState(false);
  const [cartClick, setCartClick] = useState(false);
  const [navClick, setNavClick] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("home");

  const handleToggleSearch = () => {
    setToggleSearch((prevToggleSearch) => !prevToggleSearch);
    if (!toggleSearch) {
      setSearchQuery("");
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/shop?query=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/");
    }
  };

  const handleCartClick = () => {
    setCartClick(!cartClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleCartClose = () => {
    setCartClick(false);
    setOverlay(false);
  };

  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
  };

  return (
    <>
      <Notification />
      <section className="w-full shadow-2xl fixed top-0 z-[500] bg-neutral-100 transition duration-300 ease-in-out">
        <div
          className={`overlay ${overlay ? "show-overlay" : ""}`}
          onClick={handleNavClose}
        ></div>
        {toggleSearch && (
          <div className="px-8 flex max-w-[1300px] mx-auto">
            <form
              onSubmit={handleSearch}
              className={`max-w-[800px] mx-auto opacity-0 max-h-0 ${
                toggleSearch
                  ? "flex items-center justify-center pt-[1rem] opacity-100 max-h-[50px]"
                  : ""
              }`}
            >
              <input
                type="text"
                value={searchQuery}
                placeholder="Search"
                className="border px-4 border-black outline-none md:w-[30rem] w-[15rem] py-2 rounded-l-full"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                aria-label="search"
                className="px-3 py-2 bg-black border border-black rounded-r-full"
              >
                <IoSearch className="w-6 h-6 text-white" />
              </button>
            </form>
          </div>
        )}
        <div className="py-7 px-[16px] flex justify-between items-center max-w-[1350px] mx-auto">
          <div>
            <h1 className="text-[1.7rem] font-[700] text-primary-400">
              <Link href="/">Furniture</Link>
            </h1>
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-10 text-lg font-[600]">
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "home" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setActiveLink("home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "shop" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/shop"
                  onClick={() => {
                    setActiveLink("shop");
                  }}
                >
                  Shop
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "about" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/about"
                  onClick={() => {
                    setActiveLink("about");
                  }}
                >
                  About
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "blog" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/blog"
                  onClick={() => {
                    setActiveLink("blog");
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "contact" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => {
                    setActiveLink("contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between relative xs:ml-[0.5rem]">
            <button
              aria-label="search"
              className="mr-4 grid cursor-pointer xs:mx-[0.5rem] lg:mr-[1rem] lg:ml-0"
              onClick={handleToggleSearch}
            >
              <IoSearch className="w-6 h-6" />
            </button>

            <button
              aria-label="cart"
              className="grid cursor-pointer xs:mx-[0.5rem] lg:mr-[1rem] lg:ml-0 relative"
              onClick={handleCartClick}
            >
              <TiShoppingCart className="w-6 h-6" />
              {cartItems.length >= 1 && (
                <span className="absolute left-[1.1rem] rounded-[50%] w-[15px] h-[15px] text-neutral-100 leading-[15px] text-[0.75rem] bg-primary-400">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button
              aria-label="open and close the navigation menu"
              className="grid cursor-pointer lg:hidden"
              onClick={navClick ? handleNavClose : handleNavClick}
            >
              {navClick ? (
                <IoClose className="text-[1.7rem] z-[200]" />
              ) : (
                <IoIosMenu className="text-[1.7rem]" />
              )}
            </button>
          </div>
        </div>

        {/* --------------------
        ------- CART MENU
        ------------------------ */}
        {cartClick && (
          <CartList
            cartClick={handleCartClick}
            handleCartClose={handleCartClose}
          />
        )}

        {/* --------------------
        ------- SMALL NAV MENU
        ------------------------ */}

        {navClick && (
          <div>
            <ul className="fixed right-0 top-0 pt-[5rem] font-[600] pl-[1rem] gap-[1rem] flex flex-col w-[40%] z-[190] h-[100vh] bg-neutral-100">
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "home" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setActiveLink("home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "shop" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/shop"
                  onClick={() => {
                    setActiveLink("shop");
                  }}
                >
                  Shop
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "about" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/about"
                  onClick={() => {
                    setActiveLink("about");
                  }}
                >
                  About
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "blog" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/blog"
                  onClick={() => {
                    setActiveLink("blog");
                  }}
                >
                  Blog
                </Link>
              </li>
              <li
                className={`hover:text-primary-400 ${
                  activeLink === "contact" ? "text-primary-400" : ""
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => {
                    setActiveLink("contact");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
