import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiTrustedshops } from "react-icons/si";
import { MdOutlineCancel, MdOutlineMenu } from "react-icons/md";
import { links } from "../data/dummy";
import "../App.css";

const activeLink = "flex items-center ml-6 my-3 p-2 font-bold hover:bg-light-gray last:mb-0";

const normalLink =
    "flex items-center ml-6 my-3 p-2 dark:text-gray-700 dark:hover:text-black hover:bg-light-gray last:mb-0";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`absolute  bg-white z-10 flex flex-col sm:w-72 pl-4 transition-all duration-300 ${
                isOpen ? "" : "w-72 transform: -translate-x-3/4"
            }`}
        >
            <section
                className={`py-4 flex justify-between text-xl dark:text-white text-slate-900 ${
                    isOpen ? "pr-4" : "pr-4 mr-2"
                }`}
            >
                <Link
                    to="/"
                    className={`flex items-center opacity-100 visible transition-all duration-200 ${
                        isOpen ? "overflow-y-auto" : "invisible opacity-0"
                    }`}
                    onClick={() => {}}
                >
                    <SiTrustedshops className="mr-2" /> <span>Overtea</span>
                </Link>
                {isOpen ? (
                    <div className="relative cursor-pointer" data-closemenu="Close Menu" onClick={handleCloseMenu}>
                        <MdOutlineCancel />
                    </div>
                ) : (
                    <div className="relative cursor-pointer" data-openmenu="Open Menu" onClick={handleCloseMenu}>
                        <MdOutlineMenu />
                    </div>
                )}
            </section>
            <section
                className={`mt-4 flex flex-col items-stretch  flex-shrink flex-grow-0 opacity-100 visible transition-all duration-400 ${
                    isOpen ? "overflow-y-auto" : "invisible opacity-0 overflow-y-auto"
                }`}
            >
                {links.map((link) => (
                    <div key={link.title}>
                        <p className="mt-8 mb-2 uppercase  first:mt-4 last:mb-0">{link.title}</p>
                        {link.links.map((link) => (
                            <NavLink
                                to={`/${link.name}`}
                                key={link.name}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                onClick={handleCloseMenu}
                            >
                                {link.icon} <span className="ml-2 capitalize">{link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Sidebar;
