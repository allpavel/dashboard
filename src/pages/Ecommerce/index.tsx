import React from "react";
import { CommonStatistics } from "./components/CommonStatistics";
import { Stacked, Pie, Button, SparkLine } from "../../components";

const Ecommerce: React.FC = () => {
    return (
        <main className="p-4 bg-main-bg">
            <CommonStatistics />
            <CommonStatistics />
            <CommonStatistics />
            <CommonStatistics />
        </main>
    );
};

export default Ecommerce;
