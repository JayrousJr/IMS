const QuantityCheck = ({ data }) => {
    function color() {
        if (data < 10) {
            return "text-red-500";
        }
        if (data >= 10) {
            return "text-green-500";
        }
    }
    return <div className={`${color()}`}>{data}</div>;
};

export default QuantityCheck;
