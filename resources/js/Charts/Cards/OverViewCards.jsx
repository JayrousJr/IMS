import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { BsPlus, BsUnity } from "react-icons/bs";
import {
    HiMiniArrowTrendingUp,
    HiOutlineUserCircle,
    HiShoppingBag,
    HiShoppingCart,
    HiUsers,
} from "react-icons/hi2";

const OverViewCards = ({ users, customers, productCount, salesCount }) => {
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
        <>
            {overview.map((item, index) => (
                <Card
                    sx={{ minWidth: 100, borderRadius: "16px" }}
                    variant="outlined"
                    key={index}
                >
                    <CardContent>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography variant="h5" component="p">
                                    {item.value}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 13,
                                        mt: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box>
                                <span className={`text-[30px] ${item.color}`}>
                                    {item.icon}
                                </span>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default OverViewCards;
