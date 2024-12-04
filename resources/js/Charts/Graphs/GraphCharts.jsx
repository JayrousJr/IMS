import { Card } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import React from "react";

const GraphCharts = ({ thisWeekSales, stockDistribution }) => {
    console.log(stockDistribution);

    const weekSales = {
        xAxis: thisWeekSales.map((item) => item.day),
        yAxis: thisWeekSales.map((item) => item.total),
    };
    const stockDis = stockDistribution.map((item, index) => {
        return {
            id: index,
            value: item.total,
            label: item.category,
        };
    });
    return (
        <section className="section grid grid-cols-2 max-md:grid-cols-1 my-4 gap-4 items-center">
            <Card
                sx={{ minWidth: 100, borderRadius: "16px", p: 2 }}
                variant="outlined"
            >
                <p className="font-poppins font-semibold text-[18px]">
                    Sales This Week
                </p>
                <BarChart
                    xAxis={[
                        {
                            scaleType: "band",
                            data: weekSales.xAxis,
                        },
                    ]}
                    series={[{ data: weekSales.yAxis }]}
                    width={480}
                    height={300}
                    borderRadius={10}
                />
            </Card>
            <Card
                sx={{ minWidth: 100, borderRadius: "16px", p: 2 }}
                variant="outlined"
            >
                <p className="font-poppins font-semibold text-[18px]">
                    Products in Each Category
                </p>
                <PieChart
                    series={[
                        {
                            data: stockDis,
                            innerRadius: 60,
                            outerRadius: 80,
                            paddingAngle: 1,
                            highlightScope: {
                                fade: "global",
                                highlight: "item",
                            },
                            faded: {
                                innerRadius: 30,
                                additionalRadius: -30,
                                color: "gray",
                            },
                        },
                    ]}
                    width={400}
                    height={300}
                />
            </Card>
            {/* <LineChart
                xAxis={[{ scaleType: "band", data: weekSales.xAxis }]}
                series={[
                    {
                        data: weekSales.yAxis,
                        area: true,
                    },
                ]}
                width={500}
                height={300}
            /> */}
            {/* <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
            {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
            },
        ]}
        width={500}
        height={300}
    /> */}
        </section>
    );
};

export default GraphCharts;
