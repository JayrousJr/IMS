import ActionLink from "@/Components/ActionLink";
import PageDescription from "@/Components/PageDescription";
import Pagination from "@/Components/Pagination";
import Layouts from "@/Layouts/Layouts";
import { Head, Link } from "@inertiajs/react";
import moment from "moment";
import React, { useState } from "react";
import { HiEye, HiMiniPlus, HiTrash } from "react-icons/hi2";

const ProductsList = ({ product }) => {
    const [products, setproducts] = useState(product);

    return (
        <Layouts name={"Products"}>
            <Head title="Products" />
            <div className="text-write flex flex-col gap-8 px-8 py-2 mt-1 rounded-xl w-full">
                <PageDescription
                    title="Products"
                    page="List"
                    routeTo="product.index"
                    actionLink="product.create"
                />
                <div className=" text-text-gray table-container">
                    <table className="table">
                        <thead>
                            <tr className="tr">
                                <th className="th">Name</th>
                                <th className="th">Category</th>
                                <th className="th">Expiry Date</th>
                                <th className="th">Price</th>
                                <th className="th">Description</th>
                                <th className="th">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th className="th">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.data?.map((item, index) => {
                                const expiryDate = item.expiryDate;
                                const currentDate = moment();
                                const expiryDateMoment = moment(expiryDate);
                                const differenceInMonths =
                                    expiryDateMoment.diff(
                                        currentDate,
                                        "months"
                                    );

                                const backgroundColor =
                                    differenceInMonths <= 1
                                        ? "bg-red-500"
                                        : differenceInMonths > 1 &&
                                          differenceInMonths <= 3
                                        ? "bg-orange-500"
                                        : "bg-green-500";
                                return (
                                    <tr className="tr" key={index}>
                                        <td className="td">{item.name}</td>
                                        <td className="td">
                                            {item.categoryID?.name}
                                        </td>
                                        <td className="td">
                                            <span
                                                className={`px-2 py-1 rounded-xl font-bold ${backgroundColor}`}
                                            >
                                                {item.expiryDate}
                                            </span>
                                        </td>
                                        <td className="td">{item.price}</td>
                                        <td className="td">
                                            {item.description.substring(0, 30) +
                                                "..."}
                                        </td>

                                        <td className="td text-right">
                                            <Link
                                                href={route(
                                                    "product.show",
                                                    item.id
                                                )}
                                                className="text-secondary"
                                            >
                                                <HiEye className="text-[20px]" />
                                            </Link>
                                        </td>
                                        <td className="td text-right">
                                            <Link
                                                className="text-red-500 cursor-pointer"
                                                href={route(
                                                    "product.destroy",
                                                    item.id
                                                )}
                                            >
                                                <HiTrash className="text-[20px]" />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination props={products?.meta} />
                </div>
            </div>
        </Layouts>
    );
};

export default ProductsList;
