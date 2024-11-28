import Description from "@/Components/Description";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import ButtonComponent from "@/Components/ButtonComponent";
import NoDataFound from "@/Components/NoDataFound";
import { useState } from "react";

const PermissionList = ({ permissions }) => {
    const [permission, setpermission] = useState(permissions.data);
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
                <ButtonComponent
                    data={id}
                    mode="view"
                    routeTo="permission.show"
                />
            ),
        },
    ];
    return (
        <Layouts>
            <Head title="Permision" />
            <Description title="Permision List" link={null} />
            {permission.length > 0 ? (
                <TableGridComponent rows={permission} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};

export default PermissionList;
