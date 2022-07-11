import React, { memo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Settings from "./components/Settings";
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
        <div className="flex h-screen overflow-hidden">
            <BrowserRouter>
                <Sidebar />
                <div className="w-full ml-20">
                    <Navbar />
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
            <Settings />
        </div>
    );
};

export default App;
