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

const ProductsList = ({ product }) => {
    let editedProduct = product.data.map((item) => {
        return {
            id: item.id,
            av_q: item.available_quantity,
            batch_no: item.stock.batch_no,
            bPrice: formatMoney(item.stock.buying_price),
            sPrice: formatMoney(item.stock.selling_price),
            expiry_date: item.stock.expiry_date,
            p_namme: item.stock.name,
            p_category: item.stock.category.name,
            daysToExpire: item.stock.daysToExpire,
        };
    });
    const [products, setProducts] = useState(editedProduct);
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
            field: "p_namme",
            headerName: "Product",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "p_category",
            headerName: "Category",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "av_q",
            headerName: "Quantity",
            flex: 1,
            cellClassName: "name-column--cell",
            type: "number",
            renderCell: ({ row: { av_q } }) => <QuantityCheck data={av_q} />,
            maxWidth: 100,
        },
        {
            field: "batch_no",
            headerName: "Batch No",
            flex: 1,
            type: "number",
            cellClassName: "name-column--cell",
            maxWidth: 100,
        },
        {
            field: "bPrice",
            headerName: "Buying Price",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "sPrice",
            headerName: "Selling Price",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "daysToExpire",
            headerName: "Expire in",
            type: "number",
            maxWidth: 100,
            flex: 1,
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
                <ButtonComponent data={id} mode="view" routeTo="product.show" />
            ),
        },
    ];
    return (
        <Layouts>
            <Head title="Products" />
            <Description title="Products List" link="product.create" />
            {product.data.length > 0 ? (
                <TableGridComponent rows={products} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};

export default ProductsList;
