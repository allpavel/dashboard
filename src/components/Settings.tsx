import React from "react";
import { FiSettings } from "react-icons/fi";

const Logo = () => {
    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-9 bottom-4" style={{ zIndex: "1000" }}>
                <button
                    type="button"
                    className="relative text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{ background: "blue", borderRadius: "50%" }}
                    data-title="Settings"
                >
                    <FiSettings />
                </button>
            </div>
        </div>
    );
};

export default Logo;
