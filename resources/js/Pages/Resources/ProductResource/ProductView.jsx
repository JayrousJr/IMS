import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import formatMoney from "@/utils/formats";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";

const ProductCreate = ({ product, stocks }) => {
    const [products, setProducts] = useState(product.data);
    const [stockQuantity, setStockQuantity] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const { data, setData, put, processing, errors } = useForm({
        available_quantity: product.data.available_quantity,
        stock_id: product.data.stock.id,
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
        put(route("product.edit", products.id), data);
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");

    function helperText() {
        if (quantityError) return quantityError;
        if (errors.available_quantity) return errors.available_quantity;
        return "";
    }
    const refProduct = [
        {
            title: "Product ",
            value: products.stock.name,
        },
        {
            title: "Category",
            value: products.stock.category.name,
        },
        {
            title: "Selling Price",
            value: formatMoney(products.stock.selling_price),
        },
        {
            title: " Quantity",
            value: products.available_quantity,
        },
        {
            title: "Expire Date",
            value: products.stock.expiry_date,
        },
        {
            title: "Manufacturer",
            value: products.stock.manufacturer_name,
        },
        {
            title: "Supplier ",
            value: products.stock.supplier.name,
        },

        {
            title: "Shop ",
            value: products.stock.shop.shop_name,
        },
    ];

    return (
        <Layouts>
            <Head title="Product View" />
            <Description title="Product View" link={null} />
            <Box m="10px 0 0 0">
                <section className="section grid grid-cols-4 max-md:grid-cols-2 max-ss:grid-cols-1 my-4 gap-4">
                    {refProduct.map((item) => (
                        <Card sx={{ minWidth: 230 }} variant="outlined">
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: 14,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    className="text-primary"
                                >
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </Box>
            <Box m="10px 0 0 0">
                <form onSubmit={submit}>
                    <h2 className="text-[20px] font-semibold  text-center py-4">
                        You can update the following data on this product
                    </h2>
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
                            type="number"
                            name="available_quantity"
                            label="Product Quantity"
                            value={data.available_quantity}
                            helperText={helperText()}
                            onChange={(e) =>
                                setData("available_quantity", e.target.value)
                            }
                            error={helperText()}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <SubmitButton
                        title="Update"
                        processing={processing}
                        disabled={quantityError}
                    />
                </form>
            </Box>
        </Layouts>
    );
};

export default ProductCreate;
