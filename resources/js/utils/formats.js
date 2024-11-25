export default function formatMoney(amount) {
    return new Intl.NumberFormat("sw-TZ", {
        style: "currency",
        currency: "TZS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
