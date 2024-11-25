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

const Sales = ({ sales }) => {
    
    let editedSales = sales.data.map((item) => {
        return {
            id: item.id,
            receipt: item.receipt,
            amount: formatMoney(item.amount),
            paid: formatMoney(item.discounted),
            discount: item.discount,
            customer: item.customer.name,
            shop: item.shops.shop_name,
        };
    });
    const [sale, setSales] = useState(editedSales);
    const theme = useTheme();
    const colors = tokens(theme.palette?.mode);
    const [openModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
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
    const columns = [
        {
            field: "customer",
            headerName: "Customer",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "shop",
            headerName: "Shop",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "receipt",
            headerName: "Receipt",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "amount",
            headerName: "Total",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "discount",
            headerName: "Discount(%)",
            flex: 1,
            cellClassName: "name-column--cell",
            width: 50,
            minWidth: 70,
            maxWidth: 120,
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
        <Layouts>
            <Head title="Sale" />
            <Description title="Sales List" link="sale.create" />
            {sales.data.length > 0 ? (
                <TableGridComponent rows={sale} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};

export default Sales;
