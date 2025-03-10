import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        placeholder,
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
        <input
            {...props}
            type={type}
            className={`mt-1 block input w-full border-dark-300 dark:border-gray-700 bg-dark-200 dark:text-write focus:border-primary focus:ring-primary dark:focus:ring-primary rounded-md shadow-sm ${
                errors ? "!border-red-500" : ""
            } ${className}`}
            placeholder=""
            ref={input}
        />
    );
});
