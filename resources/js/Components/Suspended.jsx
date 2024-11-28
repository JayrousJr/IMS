import React from "react";

const Suspended = ({ suspended }) => {
    return (
        <div>
            {suspended === 0 ? (
                <span className="bg-green-700 px-5 py-1 rounded-xl">
                    Active
                </span>
            ) : (
                <span className="bg-red-700 px-5 py-1 rounded-xl">Burned</span>
            )}
        </div>
    );
};

export default Suspended;
