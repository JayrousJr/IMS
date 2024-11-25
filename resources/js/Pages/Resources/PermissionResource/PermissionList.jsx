import DestroyLink from "@/Components/DestroyLink";
import NoDataFound from "@/Components/NoDataFound";
import PageDescription from "@/Components/PageDescription";
import Pagination from "@/Components/Pagination";
import ViewLink from "@/Components/ViewLink";
import Layouts from "@/Layouts/Layouts";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const PermissionList = ({ permissions }) => {
    return (
        <Layouts name={"Permission"}>
            <Head title="Permission" />
            <div className="text-write flex flex-col gap-8 px-8 py-2 mt-1 rounded-xl w-full">
                <PageDescription
                    title="Permission"
                    page="List"
                    routeTo="permission.index"
                    actionLink="permission.create"
                />
                {permissions.data.length > 0 ? (
                    <div className=" text-text-gray table-container">
                        <table className="table">
                            <thead>
                                <tr className="tr">
                                    <th className="th">Name</th>
                                    <th className="th">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    <th className="th">
                                        <span className="sr-only">Delete</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {permissions.data.map((item, index) => (
                                    <tr className="tr" key={index}>
                                        <td className="td">{item.name}</td>
                                        <td className="td text-right">
                                            <ViewLink
                                                routeName="permission.show"
                                                id={item.id}
                                            />
                                        </td>
                                        <td className="td text-right">
                                            <DestroyLink
                                                routeName="permission.destroy"
                                                id={item.id}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination props={permissions.meta} />
                    </div>
                ) : (
                    <NoDataFound name={"Permission"} />
                )}
            </div>
        </Layouts>
    );
};

export default PermissionList;
