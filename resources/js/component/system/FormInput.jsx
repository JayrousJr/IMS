import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function FormInput(
    { type = "text", className = "", isFocused = false, placeholder, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 dark:border-gray-700 dark:text-gray-900 focus:border-secondary dark:focus:border-secondary focus:ring-secondary dark:focus:ring-secondary rounded-md shadow-sm " +
                className
            }
            placeholder=""
            ref={input}
        />
    );
});

/**
 * className={"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500         dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " + className}
 */
