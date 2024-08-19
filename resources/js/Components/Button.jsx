export default function Button({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center px-4 py-2 bg-secondary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:opacity-80  dark:active:bg-gray-300 focus:outline-none transition ease-in-out duration-150 ${
                disabled && "opacity-25"
            }  ${
                className === "danger"
                    ? "bg-red-700 text-black hover:opacity-90"
                    : className === "warning"
                    ? "bg-orange-5s00 hover:opacity-90"
                    : ""
            }`}
            disabled={disabled}
        >
            {disabled ? "Processing ..." : children}
        </button>
    );
}
