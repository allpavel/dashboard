import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
    Line,
} from "./pages";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="flex">
            <BrowserRouter>
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
                <Sidebar />
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full flex-1 ml-16`}>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Ecommerce />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />

                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* Apps */}
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/area" element={<Area />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/financial" element={<Financial />} />
                        <Route path="/color-mapping" element={<ColorMapping />} />
                        <Route path="/pyramid" element={<Pyramid />} />
                        <Route path="/stacked" element={<Stacked />} />
                        <Route path="/line" element={<Line />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
