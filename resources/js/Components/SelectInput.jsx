import { forwardRef, useEffect, useRef, useState } from "react";

export default forwardRef(function SelectInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        placeholder,
        passedData,
        errors,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();
    const [cat, setCat] = useState(passedData);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            type={type}
            className={`mt-1 block input w-full border-dark-300 dark:border-gray-700 bg-dark-200 dark:text-write focus:border-primary focus:ring-primary dark:focus:ring-primary rounded-md shadow-sm ${
                errors ? "!border-red-500" : ""
            } ${className}`}
            placeholder=""
            ref={input}
        >
            <option value="default">Select Value</option>
            {cat.data.map((item, index) => (
                <option key={index} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
});
