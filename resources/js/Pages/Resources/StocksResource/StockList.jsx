import Description from "@/Components/Description";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import ButtonComponent from "@/Components/ButtonComponent";
import { useState } from "react";
import NoDataFound from "@/Components/NoDataFound";
import formatMoney from "@/utils/formats";
import ExpireComponent from "@/Components/ExpireComponent";
import QuantityCheck from "@/Components/QuantityCheck";

const StockList = ({ stocks }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette?.mode);
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [stock, setStock] = useState(stocks.data);
    /**
     * The folowing code are essential on the delete modal view start
     */
    const handleOpenModal = (id) => {
        setSelectedId(id);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedId(null);
    };

    /**
     * The folowing code are essential on the delete modal view end
     */

    const refStock = stock.map((item) => {
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

    const columns = [
        {
            field: "name",
            headerName: "Item",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "category",
            headerName: "Category",
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
            field: "buying_price",
            headerName: "Buying Price",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "selling_price",
            headerName: "Selling Price",
            flex: 1,
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
        <Layouts>
            <Head title="Stock" />
            <Description title="Stock List" link="stock.create" />
            {stock.length > 0 ? (
                <TableGridComponent rows={refStock} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};

export default StockList;
