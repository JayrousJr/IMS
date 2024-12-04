import AuthCard from "@/Charts/Cards/AuthCard";
import OverViewCards from "@/Charts/Cards/OverViewCards";
import GraphCharts from "@/Charts/Graphs/GraphCharts";
import RecentSales from "@/Charts/Tables/RecentSales";
import StockItems from "@/Charts/Tables/StockItems";
import Layouts from "@/Layouts/Layouts";
import { user } from "@/utils/auth";
import { Head, Link } from "@inertiajs/react";
import { Box } from "@mui/material";

const Dashboard = ({
    productCount,
    salesCount,
    topProducts,
    outStock,
    users,
    customers,
    recentSales,
    thisWeekSales,
    stockDistribution,
}) => {
    const userData = user();

    return (
        <Layouts>
            <Head title="Dashboard" />
            <Box m="10px 0 0 0">
                <section className="section grid grid-cols-1  my-4 gap-4">
                    <AuthCard />
                </section>
                <section className="section grid grid-cols-4 max-md:grid-cols-2 my-4 gap-4">
                    <OverViewCards
                        users={users}
                        customers={customers}
                        productCount={productCount}
                        salesCount={salesCount}
                    />
                </section>
                <section className="section">
                    <GraphCharts
                        thisWeekSales={thisWeekSales}
                        stockDistribution={stockDistribution}
                    />
                </section>
                <section className="section grid grid-cols-1 max-md:grid-cols-1 my-4 gap-4"></section>

                <section className="section grid grid-cols-2 max-md:grid-cols-1 my-4 gap-6">
                    <StockItems stock={outStock} />
                    <RecentSales sale={recentSales} />
                </section>
            </Box>
        </Layouts>
    );
};

export default Dashboard;
