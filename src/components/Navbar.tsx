import React, { useRef } from "react";
import { MdSearch, MdShoppingCart, MdChat, MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import "../App.css";

const Navbar = () => {
    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleSearchFocus = () => {
        searchRef.current?.focus();
    };

    return (
        <div className="flex justify-between p-4 dark:bg-main-bg bg-main-bg text-2xl">
            <div className="flex items-center">
                <button data-search="Search" className="relative" onClick={handleSearchFocus}>
                    <MdSearch />
                </button>
                <input ref={searchRef} className="ml-4 py-1 px-2 text-base" />
            </div>
            <div className="flex justify-around">
                <button className="mr-4 relative" data-cart="Cart">
                    <MdShoppingCart />
                </button>
                <button className="mr-4 relative" data-chat="Chat">
                    <MdChat />
                </button>
                <button className="mr-4 relative" data-notification="Notifications">
                    <MdNotifications />
                </button>
                <div className="flex items-center text-base">
                    <img src={avatar} alt="" className="rounded-full w-8 h-8" />
                    <p>Hi, Pavel</p>
                    <button>
                        <MdKeyboardArrowDown />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
