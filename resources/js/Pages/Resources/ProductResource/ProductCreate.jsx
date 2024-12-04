import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const ProductCreate = ({ stocks }) => {
    const [stockQuantity, setStockQuantity] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        stock_id: "",
        available_quantity: "",
    });

    const selectedStock = stocks.data.find(
        (stock) => stock.id == data.stock_id,
    );

    useEffect(() => {
        if (selectedStock) {
            setStockQuantity(selectedStock.available_quantity);
        } else {
            setStockQuantity(null);
        }
    }, [data.stock_id, stocks]);

    useEffect(() => {
        if (parseInt(data.available_quantity) > parseInt(stockQuantity)) {
            setQuantityError(
                `The Quantity you are trying to enter is greater than ${stockQuantity}`,
            );
        } else if (data.available_quantity <= 0) {
            setQuantityError(
                `The Quantity you are trying to enter is less than the required amount, atleast record 1 product`,
            );
        } else {
            setQuantityError(null);
        }
    }, [data.available_quantity, stockQuantity]);

    const handleQuantityBlur = () => {
        if (data.available_quantity > stockQuantity) {
            setQuantityError(
                `The Quantity you are trying to enter is greater than ${stockQuantity}`,
            );
        } else if (data.available_quantity < 1) {
            setQuantityError(
                `The Quantity you are trying to enter is less than the required amount, atleast record 1 product`,
            );
        } else {
            setQuantityError(null);
        }
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("product.store", data));
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");

    function helperText() {
        if (quantityError) return quantityError;
        if (errors.available_quantity) return errors.available_quantity;
        return "";
    }

    return (
        <Layouts>
            <Head title="Product Create" />
            <Description title="Product Create" link={null} />
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
                            name="stock_id"
                            label="Product Name"
                            select
                            value={data.stock_id}
                            helperText={
                                errors.stock_id
                                    ? errors.stock_id
                                    : "Select the product from the stock and transfer it to shop"
                            }
                            onChange={(e) =>
                                setData("stock_id", e.target.value)
                            }
                            error={errors.stock_id ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        >
                            {stocks.data.map((item) => (
                                <MenuItem key={item.name} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="available_quantity"
                            label="Product Quantity"
                            value={data.available_quantity}
                            helperText={helperText()}
                            onChange={(e) =>
                                setData("available_quantity", e.target.value)
                            }
                            error={
                                errors.available_quantity || quantityError
                                    ? true
                                    : false
                            }
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <SubmitButton
                        title="Create"
                        processing={processing}
                        disabled={quantityError}
                    />
                </form>
            </Box>
        </Layouts>
    );
};

export default ProductCreate;
