import ButtonComponent from "@/Components/ButtonComponent";
import TableGridComponent from "@/Components/TableGridComponent";
import formatMoney from "@/utils/formats";
import React from "react";
import { Box } from "@mui/material";

function RecentSales({ sale }) {
    let editedSales = sale?.data?.map((item) => {
        return {
            id: item.id,
            receipt: item.receipt,
            amount: formatMoney(item.amount),
            paid: formatMoney(item.discounted),
            discount: `${item.discount}%`,
            customer: item.customer?.name,
            shop: item.shops.shop_name,
        };
    });
    const colums = [
        {
            field: "customer",
            headerName: "Customer",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "discount",
            headerName: "Discount",
            flex: 1,
            cellClassName: "name-column--cell",
            width: 50,
            // minWidth: 70,
            // maxWidth: 70,
        },
        {
            field: "paid",
            headerName: "Paid Amt",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "view",
            headerName: "View",
            flex: 1,
            width: 50,
            minWidth: 50,
            maxWidth: 70,
            renderCell: ({ row: { id } }) => (
                <ButtonComponent data={id} mode="view" routeTo="sale.show" />
            ),
        },
    ];
    return (
        <Box display="flex" flexDirection="column" gap={1} mt={1}>
            <p className="font-poppins font-semibold text-[18px]">
                Recent Sales
            </p>
            <TableGridComponent rows={editedSales} columns={colums} />
        </Box>
    );
}

export default RecentSales;
