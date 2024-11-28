import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import formatMoney from "@/utils/formats";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

const SalesView = ({ sale }) => {
    const [sales, setSales] = useState(sale.data);

    const saleData = [
        {
            title: "Customer",
            value: sales.customer.name,
        },
        {
            title: "Initial Cost",
            value: formatMoney(sales.amount),
        },
        {
            title: "Discount (%)",
            value: sales.discount,
        },
        {
            title: "Paid Amount",
            value: formatMoney(sales.discounted),
        },
        {
            title: "Issued By",
            value: sales.user.name,
        },
        {
            title: "Issued Date",
            value: sales.date,
        },
        {
            title: "Shop",
            value: sales.shops.shop_name,
        },
        {
            title: "Receipt",
            value: sales.receipt,
        },
    ];
    const saleDetail = sales.saleDetails.map((item) => {
        return {
            id: item.id,
            price: formatMoney(item.price),
            quantity: item.quantity,
            total: formatMoney(item.total),
            product: item.product.stock.name,
        };
    });
    const columns = [
        {
            field: "product",
            headerName: "Product",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "price",
            headerName: "Price",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "quantity",
            headerName: "Quantity",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "total",
            headerName: "Total Cost",
            flex: 1,
            cellClassName: "name-column--cell",
        },
    ];
    return (
        <Layouts>
            <Head title="Sale View" />
            <Description title="Sale View" link={null} />
            <Box m="10px 0 0 0">
                <section className="section grid grid-cols-4 max-md:grid-cols-3 max-ss:grid-cols-3 my-4 gap-4">
                    {saleData.map((item) => (
                        <Card sx={{ minWidth: 210 }} variant="outlined">
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 14,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    className="text-primary"
                                >
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </Box>
            <Box m="10px 0 0 0">
                <TableGridComponent rows={saleDetail} columns={columns} />
            </Box>
        </Layouts>
    );
};

export default SalesView;
