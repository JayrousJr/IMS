import React from "react";

const ExpireComponent = ({ data }) => {
    function color() {
        if (data <= 0) {
            return "text-red-500";
        }
        if (data > 0 && data < 60) {
            return "text-orange-500";
        }
        if (data >= 60) {
            return "text-green-500";
        }
    }
    return <div className={`${color()}`}>{data}</div>;
};

export default ExpireComponent;
