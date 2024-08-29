import React from "react";
import BreadCrumb from "./BreadCrumb";
import ActionLink from "./ActionLink";

const PageDescription = ({ title, routeTo, actionLink, page }) => {
    return (
        <div className="flex flex-col gap-4">
            <BreadCrumb page={page} routeTo={routeTo}>
                {title}
            </BreadCrumb>
            <div className="flex justify-between items-center ">
                <span className="text-write font-bold text-2xl max-sm:text-xl">
                    {title}
                </span>
                {actionLink && (
                    <ActionLink href={actionLink}>
                        <span>Create</span>
                    </ActionLink>
                )}
            </div>
        </div>
    );
};

export default PageDescription;
