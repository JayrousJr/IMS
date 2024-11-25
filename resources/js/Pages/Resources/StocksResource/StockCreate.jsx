import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";

const StockCreate = ({ categories, suplliers }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        supplier_id: "",
        category_id: "",
        buying_price: "",
        selling_price: "",
        description: "",
        batch_no: "",
        initial_quantity: "",
        manufacturer_name: "",
        manufacture_date: "",
        entry_date: "",
        expiry_date: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("stock.store", data), {
            onSuccess: () => {
                reset("name", "description");
            },
        });
    };
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Layouts>
            <Head title="Stock Create" />
            <Description title="Stock Create" link={null} />
            <Box m="10px 0 0 0">
                <form onSubmit={submit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0,1fr))"
                        sx={{
                            "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4",
                            },
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="name"
                            label="Product Name"
                            value={data.name}
                            helperText={errors.name ? errors.name : ""}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="category_id"
                            label="Product Category"
                            select
                            value={data.category_id}
                            helperText={
                                errors.category_id
                                    ? errors.category_id
                                    : "Select the Product category"
                            }
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                            error={errors.category_id ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            {categories.data.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="supplier_id"
                            label="Supplier Name"
                            select
                            value={data.supplier_id}
                            helperText={
                                errors.supplier_id
                                    ? errors.supplier_id
                                    : "Select the Supplier"
                            }
                            onChange={(e) =>
                                setData("supplier_id", e.target.value)
                            }
                            error={errors.supplier_id ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            {suplliers.data.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="buying_price"
                            label="Buying Price"
                            value={data.buying_price}
                            helperText={
                                errors.buying_price ? errors.buying_price : ""
                            }
                            onChange={(e) =>
                                setData("buying_price", e.target.value)
                            }
                            error={errors.buying_price ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="selling_price"
                            label="Selling Price"
                            value={data.selling_price}
                            helperText={
                                errors.selling_price ? errors.selling_price : ""
                            }
                            onChange={(e) =>
                                setData("selling_price", e.target.value)
                            }
                            error={errors.selling_price ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="number"
                            label="Product Quantity"
                            value={data.initial_quantity}
                            helperText={
                                errors.initial_quantity
                                    ? errors.initial_quantity
                                    : ""
                            }
                            onChange={(e) =>
                                setData("initial_quantity", e.target.value)
                            }
                            error={errors.initial_quantity ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="batch_no"
                            label="Batch Number"
                            value={data.batch_no}
                            helperText={errors.batch_no ? errors.batch_no : ""}
                            onChange={(e) =>
                                setData("batch_no", e.target.value)
                            }
                            error={errors.batch_no ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="manufacturer_name"
                            label="Manufacturer Name"
                            value={data.manufacturer_name}
                            helperText={
                                errors.manufacturer_name
                                    ? errors.manufacturer_name
                                    : ""
                            }
                            onChange={(e) =>
                                setData("manufacturer_name", e.target.value)
                            }
                            error={errors.manufacturer_name ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="date"
                            name="manufacture_date"
                            label="Manufacturing Date"
                            value={data.manufacture_date}
                            helperText={
                                errors.manufacture_date
                                    ? errors.manufacture_date
                                    : ""
                            }
                            onChange={(e) =>
                                setData("manufacture_date", e.target.value)
                            }
                            error={errors.manufacture_date ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="date"
                            name="entry_date"
                            label="Entry Date"
                            value={data.entry_date}
                            helperText={
                                errors.entry_date ? errors.entry_date : ""
                            }
                            onChange={(e) =>
                                setData("entry_date", e.target.value)
                            }
                            error={errors.entry_date ? true : false}
                            sx={{ gridColumn: "span 1" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="date"
                            name="expiry_date"
                            label="Expire Date"
                            value={data.expiry_date}
                            helperText={
                                errors.expiry_date ? errors.expiry_date : ""
                            }
                            onChange={(e) =>
                                setData("expiry_date", e.target.value)
                            }
                            error={errors.expiry_date ? true : false}
                            sx={{ gridColumn: "span 1" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            rows={3}
                            multiline
                            name="description"
                            label="Description/ Remark"
                            value={data.description}
                            helperText={
                                errors.description ? errors.description : ""
                            }
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            error={errors.description ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <SubmitButton title="Create" processing={processing} />
                </form>
            </Box>
        </Layouts>
    );
};

export default StockCreate;
