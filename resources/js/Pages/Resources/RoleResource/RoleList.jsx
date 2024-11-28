import Description from "@/Components/Description";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import ButtonComponent from "@/Components/ButtonComponent";
import NoDataFound from "@/Components/NoDataFound";
import { useState } from "react";

const RoleList = ({ roles }) => {
    const [role, setRole] = useState(roles.data);
    const columns = [
        {
            field: "name",
            headerName: "Name",
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
                <ButtonComponent data={id} mode="view" routeTo="role.show" />
            ),
        },
    ];
    return (
        <Layouts>
            <Head title="Roles" />
            <Description title="Roles List" link="role.create" />
            {role.length > 0 ? (
                <TableGridComponent rows={role} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};

export default RoleList;
