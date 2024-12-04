import ButtonComponent from "@/Components/ButtonComponent";
import ExpireComponent from "@/Components/ExpireComponent";
import QuantityCheck from "@/Components/QuantityCheck";
import TableGridComponent from "@/Components/TableGridComponent";
import formatMoney from "@/utils/formats";
import { Box } from "@mui/material";
import React from "react";

const StockItems = ({ stock }) => {
    const refStock = stock.data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            expiryDate: item.expiry_date,
            category: item.category.name,
            available_quantity: item.available_quantity,
            batch_no: item.batch_no,
            buying_price: formatMoney(item.buying_price),
            selling_price: formatMoney(item.selling_price),
            daysToExpire: item.daysToExpire,
        };
    });
    const colums = [
        {
            field: "name",
            headerName: "Item",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "available_quantity",
            headerName: "Quantity",
            flex: 1,
            cellClassName: "name-column--cell",
            renderCell: ({ row: { available_quantity } }) => (
                <QuantityCheck data={available_quantity} />
            ),
            type: "number",
            maxWidth: 100,
        },
        {
            field: "batch_no",
            headerName: "Batch No",
            flex: 1,
            type: "number",
            maxWidth: 100,
            cellClassName: "name-column--cell",
        },
        {
            field: "daysToExpire",
            headerName: "Expire in",
            flex: 1,
            type: "number",
            maxWidth: 100,
            cellClassName: "name-column--cell",
            renderCell: ({ row: { daysToExpire } }) => (
                <ExpireComponent data={daysToExpire} />
            ),
        },
        {
            field: "view",
            headerName: "View",
            flex: 1,
            width: 50,
            minWidth: 50,
            maxWidth: 70,
            renderCell: ({ row: { id } }) => (
                <ButtonComponent data={id} mode="view" routeTo="stock.show" />
            ),
        },
    ];
    return (
        <Box display="flex" flexDirection="column" gap={1} mt={1}>
            <p className="font-poppins font-semibold text-[18px]">
                Low Stock Items
            </p>
            <TableGridComponent rows={refStock} columns={colums} />
        </Box>
    );
};

export default StockItems;
