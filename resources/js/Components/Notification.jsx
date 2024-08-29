import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const Notification = () => {
    const { session } = usePage();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (session?.success) {
            setMessage(session?.success);
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
    }, [session]);

    return (
        <div>
            {message && (
                <div className="bg-green-400 px-4 py-2">
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default Notification;
