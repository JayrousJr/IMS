export default function Button({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`inline-flex items-center px-4 py-2 bg-primary bg-secondary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:opacity-80   focus:outline-none transition ease-in-out duration-150 ${
                disabled && "opacity-25"
            }  ${
                className === "danger"
                    ? "bg-red-700 text-dark-100 hover:opacity-90"
                    : className === "warning"
                    ? "bg-orange-500 hover:opacity-90"
                    : ""
            }`}
            disabled={disabled}
        >
            {disabled ? "Processing ..." : children}
        </button>
    );
}
