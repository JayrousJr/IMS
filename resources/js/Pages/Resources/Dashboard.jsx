import Dropdown from "@/Components/Dropdown";
import Layouts from "@/Layouts/Layouts";
import { user } from "@/utils/auth";
import { Head, Link } from "@inertiajs/react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { BsPlus, BsUnity } from "react-icons/bs";
import {
    HiMiniArrowTrendingUp,
    HiOutlineUserCircle,
    HiShoppingBag,
    HiShoppingCart,
    HiUsers,
} from "react-icons/hi2";
import { IoMdTrendingUp } from "react-icons/io";

const Dashboard = ({
    productCount,
    salesCount,
    topProducts,
    outStock,
    users,
    customers,
}) => {
    const userData = user();
    const overview = [
        {
            title: "Team",
            value: users,
            icon: <HiOutlineUserCircle />,
            color: "text-green-400",
            trend: <BsPlus />,
        },
        {
            title: "Customers",
            value: customers,
            icon: <HiUsers />,
            color: "text-rose-400",
            trend: <BsUnity />,
        },
        {
            title: "Products",
            value: productCount,
            icon: <HiShoppingBag />,
            color: "text-yellow-400",
            trend: <HiMiniArrowTrendingUp />,
        },
        {
            title: "Sales",
            value: salesCount,
            icon: <HiShoppingCart />,
            color: "text-blue-400",
            trend: <HiMiniArrowTrendingUp />,
        },
    ];
    return (
        <Layouts>
            <Head title="Dashboard" />
            <Box m="10px 0 0 0">
                {/* <section className="section">
                    <div className="">
                        <BarChart
                            xAxis={[
                                {
                                    scaleType: "band",
                                    data: ["group A", "group B", "group C"],
                                },
                            ]}
                            series={[
                                { data: [4, 3, 5] },
                                { data: [1, 6, 3] },
                                { data: [2, 5, 6] },
                            ]}
                            width={500}
                            height={300}
                        />
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: "series A" },
                                        { id: 1, value: 15, label: "series B" },
                                        { id: 2, value: 20, label: "series C" },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                        <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                    area: true,
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                    </div>
                </section> */}
                <section className="section grid grid-cols-4 max-md:grid-cols-2 my-4 gap-4">
                    {overview.map((item, index) => (
                        <Card
                            sx={{ minWidth: 200, borderRadius: "16px" }}
                            variant="outlined"
                        >
                            <CardContent>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Box>
                                        <Typography
                                            gutterBottom
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: 13,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="p"
                                            // className={`${item.color} `}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <span
                                            className={`text-[30px] ${item.color}`}
                                        >
                                            {item.icon}
                                        </span>
                                    </Box>
                                </Box>
                                <Box mt={1}>
                                    <span className={`${item.color}`}>
                                        {item.trend}
                                    </span>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </section>
                <section className="section grid grid-cols-4 max-md:grid-cols-1 my-4 gap-4"></section>
            </Box>
        </Layouts>
    );
};

export default Dashboard;
