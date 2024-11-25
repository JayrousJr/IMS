import DestroyLink from "@/Components/DestroyLink";
import NoDataFound from "@/Components/NoDataFound";
import PageDescription from "@/Components/PageDescription";
import Pagination from "@/Components/Pagination";
import TableComponent from "@/Components/TableComponent";
import ViewLink from "@/Components/ViewLink";
import Layouts from "@/Layouts/Layouts";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const RoleList = ({ roles }) => {
    return (
        <Layouts name={"Role"}>
            <Head title="Role" />
            <div className="text-write flex flex-col gap-8 px-8 py-2 mt-1 rounded-xl w-full">
                <PageDescription
                    title="Role"
                    page="List"
                    routeTo="role.index"
                    actionLink="role.create"
                />
                {roles.data.length > 0 ? (
                    <TableComponent data={roles} />
                ) : (
                    <NoDataFound name={"Role"} />
                )}
            </div>
        </Layouts>
    );
};

export default RoleList;
