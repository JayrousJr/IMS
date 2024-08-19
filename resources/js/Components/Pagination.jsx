import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination({ props }) {
    const [currentPage, setCurrentPage] = useState(props.current_page || 1);
    const totalPages = props.last_page;
    const paginate = props.links;
    const visiblePages = 5;

    useEffect(() => {
        setCurrentPage(props.current_page);
    }, [props.current_page]);

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    return (
        <div className="flex items-center justify-between border-t border-semi-dark px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    preserveScroll
                    href={currentPage > 1 ? paginate[currentPage - 1].url : ""}
                    onClick={() => handlePageClick(currentPage - 1)}
                    className={`relative inline-flex items-center rounded-md border border-semi-dark px-4 py-2 text-sm font-medium text-secondary hover:bg-semi-dark hover:text-secondary ${
                        currentPage === 1
                            ? "!text-gray-500 !bg-light-bg hover:bg-light-bg cursor-not-allowed"
                            : ""
                    }`}
                >
                    <BsChevronLeft />
                </Link>
                {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, i) => startPage + i
                ).map((page) => (
                    <Link
                        preserveScroll
                        key={page}
                        href={paginate[page - 1].url || ""}
                        onClick={() => handlePageClick(page)}
                        className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-bg-semi-dark hover:text-secondary ${
                            page === currentPage
                                ? "bg-bg-semi-dark text-white"
                                : ""
                        }`}
                    >
                        {page}
                    </Link>
                ))}
                <Link
                    preserveScroll
                    href={
                        currentPage < totalPages
                            ? paginate[currentPage + 1].url
                            : ""
                    }
                    onClick={() => handlePageClick(currentPage + 1)}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-semi-dark hover:text-secondary ${
                        currentPage === totalPages
                            ? "!text-gray-500 hover:bg-[#e5e7eb] cursor-not-allowed"
                            : ""
                    }`}
                >
                    <BsChevronRight />
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-secondary">
                        Showing{" "}
                        <span className="font-medium">{props.from}</span> to{" "}
                        <span className="font-medium">{props.to}</span> of{" "}
                        <span className="font-medium">{props.total}</span>{" "}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <Link
                            preserveScroll
                            href={
                                currentPage > 1
                                    ? paginate[currentPage - 1].url
                                    : ""
                            }
                            onClick={() => handlePageClick(currentPage - 1)}
                            className={`relative inline-flex items-center rounded-l-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-semi-dark hover:text-secondary ${
                                currentPage === 1
                                    ? "!text-gray-500 hover:bg-[#e5e7eb] cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            <BsChevronLeft />
                        </Link>
                        {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, i) => startPage + i
                        ).map((page) => (
                            <Link
                                preserveScroll
                                key={page}
                                href={paginate[page - 1].url || ""}
                                onClick={() => handlePageClick(page)}
                                className={`relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-semi-dark hover:text-secondary ${
                                    page === currentPage
                                        ? "bg-semi-dark text-secondary"
                                        : ""
                                }`}
                            >
                                {page}
                            </Link>
                        ))}
                        <Link
                            preserveScroll
                            href={
                                currentPage < totalPages
                                    ? paginate[currentPage + 1].url
                                    : ""
                            }
                            onClick={() => handlePageClick(currentPage + 1)}
                            className={`relative inline-flex items-center rounded-r-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-semi-dark hover:text-secondary ${
                                currentPage === totalPages
                                    ? "!text-gray-500 hover:bg-[#e5e7eb] bg-[#e5e7eb] cursor-not-allowed"
                                    : ""
                            }`}
                        >
                            <BsChevronRight />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
