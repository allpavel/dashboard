import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "./App.css";

const App: React.FC = () => {
    const activeMenu = false;
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
                {activeMenu ? (
                    <section className="w-72 fixed dark:bg-secondary-dark-bg bg-white">Sidebar</section>
                ) : (
                    <section className="w-0 dark:bg-secondary-dark-bg">Sidebar</section>
                )}
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg">Navbar</div>
                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element="ECommerce" />
                        <Route path="/ecommerce" element="ECommerce" />

                        {/* Pages */}
                        <Route path="/orders" element="Orders" />
                        <Route path="/employees" element="Employees" />
                        <Route path="/customers" element="Customers" />

                        {/* Apps */}
                        <Route path="/kanban" element="Kanban" />
                        <Route path="/editor" element="Editor" />
                        <Route path="/calendar" element="Calendar" />
                        <Route path="/color-picker" element="color-picker" />

                        {/* Charts */}
                        <Route path="/line" element="Line" />
                        <Route path="/area" element="Area" />
                        <Route path="/bar" element="Bar" />
                        <Route path="/pie" element="Pie" />
                        <Route path="/financial" element="Financial" />
                        <Route path="/color-mapping" element="ColorMapping" />
                        <Route path="/pyramid" element="Pyramid" />
                        <Route path="/stacked" element="Stacked" />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
