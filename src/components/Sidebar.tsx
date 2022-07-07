import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiTrustedshops } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import "../App.css";

const Sidebar: React.FC = () => {
    const activeMenu = true;
    const isActive = false;

    const activeLink = "flex items-center ml-6 my-3 p-2 font-bold hover:bg-light-gray last:mb-0";

    const normalLink =
        "flex items-center ml-6 my-3 p-2 dark:text-gray-700 dark:hover:text-black hover:bg-light-gray last:mb-0";

    return (
        <div className="flex flex-col overflow-hidden h-screen pl-4">
            <section className="flex py-4 pr-4 justify-between items-center text-xl dark:text-white text-slate-900">
                <Link to="/" className="flex items-center" onClick={() => {}}>
                    <SiTrustedshops className="mr-2" /> Overtea
                </Link>
                <div className="relative cursor-pointer" data-closeMenu="Close Menu">
                    <MdOutlineCancel />
                </div>
            </section>
            <section className="mt-4 flex flex-col flex-shrink flex-grow-0 overflow-auto scrollbar">
                {links.map((link) => (
                    <div key={link.title}>
                        <p className="mt-8 mb-2 uppercase  first:mt-4 last:mb-0">{link.title}</p>
                        {link.links.map((link) => (
                            <NavLink
                                to={`/${link.name}`}
                                key={link.name}
                                className={`${isActive ? activeLink : normalLink}`}
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
