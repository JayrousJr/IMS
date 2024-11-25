import Description from "@/Components/Description";
import TableGridComponent from "@/Components/TableGridComponent";
import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import ButtonComponent from "@/Components/ButtonComponent";
import NoDataFound from "@/Components/NoDataFound";
const Categories = ({ category }) => {
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
                    routeTo="category.show"
                />
            ),
        },
    ];
    return (
        <Layouts>
            <Head title="Categories" />
            <Description title="Categories List" link="category.create" />
            {category.data.length > 0 ? (
                <TableGridComponent rows={category.data} columns={columns} />
            ) : (
                <NoDataFound />
            )}
        </Layouts>
    );
};
export default Categories;
