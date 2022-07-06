import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiTrustedshops } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../../data/dummy";
import "../App.css";

const Sidebar: React.FC = () => {
    const activeMenu = true;

    return (
        <div className="h-screen p-4">
            <section className="flex justify-between items-center text-xl dark:text-white text-slate-900">
                <Link to="/" className="flex items-center" onClick={() => {}}>
                    <SiTrustedshops className="mr-2" /> Overtea
                </Link>
                <div className="relative cursor-pointer" data-closeMenu="Close Menu">
                    <MdOutlineCancel />
                </div>
            </section>
            <section></section>
        </div>
    );
};

export default Sidebar;
