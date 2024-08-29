import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextArea(
    {
        type = "text",
        className = "",
        isFocused = false,
        placeholder,
        rows,
        errors,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            type={type}
            rows={rows}
            className={`mt-1 block w-full border-dark-300 dark:border-gray-700 bg-dark-200 dark:text-write focus:border-primary focus:ring-primary dark:focus:ring-primary rounded-md shadow-sm ${
                errors ? "!border-red-500" : ""
            } ${className}`}
            placeholder=""
            ref={input}
        />
    );
});
