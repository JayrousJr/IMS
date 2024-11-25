const columns = Object.keys(list.data[0]).map((key) => {
    if (typeof list.data[0][key] === "object") {
        return {
            id: key,
            label: key.charAt(0).toUpperCase() + key.slice(1),
            minWidth: 170,
            valueExtractor: (item) => item[key].name,
        };
    } else {
        return {
            id: key,
            label: key.charAt(0).toUpperCase() + key.slice(1),
            minWidth: 170,
        };
    }
});

const rows = list.data.map((item) => {
    return columns.reduce((acc, column) => {
        if (column.valueExtractor) {
            acc[column.id] = column.valueExtractor(item);
        } else {
            acc[column.id] = item[column.id];
        }
        return acc;
    }, {});
});
