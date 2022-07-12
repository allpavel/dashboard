import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineSupervisorAccount, MdRefresh } from "react-icons/md";
import { GiCardboardBoxClosed, GiProgression } from "react-icons/gi";

export const CommonStatistics: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between items-start bg-hero-pattern bg-white h-44 w-full bg-no-repeat bg-cover bg-center py-8 px-4 lg:p-8 shadow-md xl:justify-self-start">
                <div className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl hover:opacity-100 bg-sky-400 opacity-80">
                    <BsCurrencyDollar />
                </div>
                <div>
                    <div>
                        <p className="font-bold text-gray-400">Earnings</p>
                        <p className="text-2xl">$63,448.78</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col items-start bg-white pt-8 pb-4 px-4 lg:px-8 shadow-md">
                    <div className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl hover:opacity-100 bg-cyan-400 opacity-80 mb-4">
                        <MdOutlineSupervisorAccount />
                    </div>
                    <p>
                        <span className="text-lg font-semibold">39,354</span>
                        <span className="text-sm text-red-600 ml-1">-4%</span>
                    </p>
                    <p className="font-bold text-gray-400">Customers</p>
                </div>
                <div className="flex flex-col items-start bg-white pt-8 pb-4 px-4 lg:px-8 shadow-md">
                    <div className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl hover:opacity-100 bg-yellow-400 opacity-80 mb-4">
                        <GiCardboardBoxClosed />
                    </div>
                    <p>
                        <span className="text-lg font-semibold">4,396</span>
                        <span className="text-sm text-green-600 ml-1">+23%</span>
                    </p>
                    <p className="font-bold text-gray-400">Products</p>
                </div>
                <div className="flex flex-col items-start bg-white pt-8 pb-4 px-4 lg:px-8 shadow-md">
                    <div className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl hover:opacity-100 bg-orange-400 opacity-80 mb-4">
                        <GiProgression />
                    </div>
                    <p>
                        <span className="text-lg font-semibold">423,39</span>
                        <span className="text-sm text-green-600 ml-1">+38%</span>
                    </p>
                    <p className="font-bold text-gray-400">Sales</p>
                </div>
                <div className="flex flex-col items-start bg-white pt-8 pb-4 px-4 lg:px-8 shadow-md">
                    <div className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl hover:opacity-100 bg-lime-400 opacity-80 mb-4">
                        <MdRefresh />
                    </div>
                    <p>
                        <span className="text-lg font-semibold">9,343</span>
                        <span className="text-sm text-red-600 ml-1">-12%</span>
                    </p>
                    <p className="font-bold text-gray-400">Refunds</p>
                </div>
            </div>
        </section>
    );
};
