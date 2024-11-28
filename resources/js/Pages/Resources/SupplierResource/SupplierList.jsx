import Description from "@/Components/Description";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import { DeleteOutline } from "@mui/icons-material";
import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import ButtonComponent from "@/Components/ButtonComponent";
import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import { useState } from "react";
import Suspended from "@/Components/Suspended";
import NoDataFound from "@/Components/NoDataFound";

const SupplierList = ({ suppliers }) => {
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
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "address",
            headerName: "Address",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: "Phone",
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
                <ButtonComponent
                    data={id}
                    mode="view"
                    routeTo="supplier.show"
                />
            ),
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 100,
            minWidth: 55,
            maxWidth: 70,
            flex: 1,
            renderCell: ({ row }) => (
                <div
                    className="flex  mt-[30%] justify-center cursor-pointer"
                    onClick={() => handleOpenModal(row.id)}
                >
                    <DeleteOutline
                        sx={{
                            fontSize: "20px",
                            color: colors.red[100],
                        }}
                    />
                </div>
            ),
        },
    ];
    return (
        <Layouts>
            <Head title="Suppliers" />
            <Description title="Suppliers List" link="supplier.create" />
            {suppliers.data.length > 0 ? (
                <TableGridComponent rows={suppliers.data} columns={columns} />
            ) : (
                <NoDataFound />
            )}
            <DeleteConfirmationModal
                id={selectedId}
                open={openModal}
                handleClose={handleCloseModal}
                toRoute="supplier.destroy"
            />
        </Layouts>
    );
};

export default SupplierList;
