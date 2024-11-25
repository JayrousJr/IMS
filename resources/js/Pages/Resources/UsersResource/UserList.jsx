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
const UserList = ({ users }) => {
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
            field: "shop",
            headerName: "Shop",
            flex: 1,
            cellClassName: "name-column--cell",
            valueGetter: (params) => params.shop_name,
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "role",
            headerName: "Role",
            flex: 1,
            cellClassName: "name-column--cell",
            valueGetter: (params) => params.name,
        },
        {
            field: "suspended",
            headerName: "Status",
            flex: 1,
            width: 50,
            minWidth: 130,
            maxWidth: 130,
            renderCell: ({ row: { suspended } }) => (
                <Suspended suspended={suspended} />
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
                <ButtonComponent data={id} mode="view" routeTo="user.show" />
            ),
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 50,
            minWidth: 155,
            maxWidth: 70,
            flex: 1,
            renderCell: ({ row }) => (
                <div
                    className="flex  mt-[13%] justify-center cursor-pointer"
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
            <Head title="Users " />
            <Description title="Users List" link="user.create" />
            <TableGridComponent rows={users.data} columns={columns} />
            {/* this is a delete confirmation modal */}
            <DeleteConfirmationModal
                id={selectedId}
                open={openModal}
                handleClose={handleCloseModal}
                toRoute="user.destroy"
            />
        </Layouts>
    );
};

export default UserList;
