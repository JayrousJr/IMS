import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import SalesDetails from "../SalesDetails";
import { useEffect, useState } from "react";

const SaleCreate = ({ products, customers }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    function helperText() {
        if (quantityError) return quantityError;
        if (errors.available_quantity) return errors.available_quantity;
        return "";
    }
    const handleMinDigit = (value) => {
        if (value <= 0) return 1;
        else return value;
    };
    const initialProduct = [
        {
            product_id: "",
            quantity: 1,
            price: 0,
            amount: 0,
        },
    ];
    const { data, setData, post, processing, errors } = useForm({
        customer_id: "",
        total_amount: 0,
        discount: 0,
        soldProducts: initialProduct,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("sale.store", data));
    };
    /**
     *Essential functions to make all work
     */
    const handleProductAdd = () => {
        setData("soldProducts", [
            ...data.soldProducts,
            {
                product_id: "",
                quantity: 1,
                price: 0,
                amount: 0,
            },
        ]);
    };
    const removeProduct = (index) => {
        const newSaleDetails = data.soldProducts.filter((_, i) => i !== index);
        setData("soldProducts", newSaleDetails);
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...data?.soldProducts];
        const product = products.data.find((p) => p.id === parseInt(value, 10));
        const price = parseInt(product?.stock?.selling_price, 10);

        // update productID, price and subtotal
        if (field === "product_id") {
            updatedProducts[index] = {
                ...updatedProducts[index],
                product_id: parseInt(value, 10),
                price: price,
                amount: price * updatedProducts[index].quantity,
            };
        } else if (field === "quantity") {
            updatedProducts[index] = {
                ...updatedProducts[index],
                quantity: parseInt(value, 10),
                amount: parseInt(value, 10) * updatedProducts[index].price,
            };
        }
        setData("soldProducts", updatedProducts);
        calculateTotalAmount(updatedProducts);
    };
    const calculateTotalAmount = (getProduct) => {
        const total = getProduct?.reduce(
            (sum, product) => sum + product.amount,
            0,
        );
        const discountAmount = (total * data.discount) / 100;
        const finalTotal = total - discountAmount;
        setData({
            ...data,
            soldProducts: getProduct,
            total_amount: finalTotal,
        });
    };
    const handleDiscount = () => {
        const discountValue = Math.max(
            0,
            Math.min(100, parseInt(data.discount, 10)),
        );
        setData({
            ...data,
            discount: discountValue,
        });

        const total = data?.soldProducts?.reduce(
            (sum, product) => sum + product.amount,
            0,
        );
        const discountAmount = (total * data.discount) / 100;
        const finalTotal = total - discountAmount;
        setData({
            ...data,
            total_amount: finalTotal,
        });
    };
    useEffect(() => {
        handleDiscount();
    }, [data.discount]);
    // handling product quantity selection
    const [productQuantity, setProductQuantity] = useState(null);
    const [quantityError, setQuantityError] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [prodIndex, setProdIndex] = useState(null);
    function getProductID(index, value) {
        const selectedProduct = products.data.find(
            (product) => product.id == value,
        );
        setSelectedProduct(selectedProduct);
        setProdIndex(index);
    }

    useEffect(() => {
        if (selectedProduct) {
            setProductQuantity(selectedProduct.available_quantity);
        } else {
            setProductQuantity(null);
        }
    }, [data.soldProducts]);

    useEffect(() => {
        if (prodIndex != null) {
            const updatedErrors = quantityError.filter(
                (error) => error.index !== prodIndex,
            );
            const currentQuantity = data.soldProducts[prodIndex]?.quantity || 0;

            if (currentQuantity > productQuantity) {
                updatedErrors.push({
                    index: prodIndex,
                    error: `Exceded ${productQuantity}`,
                });
            } else if (currentQuantity < 1) {
                updatedErrors.push({
                    index: prodIndex,
                    error: "Invalid",
                });
            }

            setQuantityError(updatedErrors);
        }
    }, [data.soldProducts[prodIndex]?.quantity, productQuantity]);

    return (
        <Layouts>
            <Head title="Sale Create" />
            <Description title="Sales Create" link={null} />
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
                            name="customer_id"
                            label="Customer Name"
                            select
                            value={data.customer_id}
                            helperText={
                                errors.customer_id
                                    ? errors.customer_id
                                    : "Select the customer from the list"
                            }
                            onChange={(e) =>
                                setData("customer_id", e.target.value)
                            }
                            error={errors.customer_id ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            {customers.data.map((item) => (
                                <MenuItem key={item.name} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="discount"
                            label="Discount (%)"
                            value={data.discount}
                            onChange={(e) => {
                                handleDiscount();
                                setData("discount", e.target.value);
                            }}
                            error={errors.discount ? true : false}
                            sx={{ gridColumn: "span 1" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="total_amount"
                            label="Total Amount"
                            inputProps={{
                                readOnly: true,
                                min: 0,
                            }}
                            value={data.total_amount}
                            sx={{ gridColumn: "span 1" }}
                        />
                        <Box
                            sx={{ gridColumn: "span 4" }}
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Typography>Products</Typography>
                            <Button
                                onClick={handleProductAdd}
                                variant="contained"
                                color="primary"
                            >
                                Add Product
                            </Button>
                        </Box>
                        {data.soldProducts?.map((product, index) => (
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(6, minmax(0,1fr))"
                                sx={{ gridColumn: "span 4" }}
                                alignItems="center"
                                key={index}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    size="small"
                                    type="text"
                                    name="product_id"
                                    label="Product"
                                    select
                                    value={product.product_id}
                                    helperText={
                                        errors[
                                            `soldProducts.${index}.product_id`
                                        ]
                                            ? errors[
                                                  `soldProducts.${index}.product_id`
                                              ]
                                            : ""
                                    }
                                    onChange={(e) => {
                                        handleProductChange(
                                            index,
                                            "product_id",
                                            e.target.value,
                                        );
                                        getProductID(index, e.target.value);
                                    }}
                                    error={
                                        !!errors[
                                            `soldProducts.${index}.product_id`
                                        ]
                                    }
                                    sx={{ gridColumn: "span 2" }}
                                >
                                    {products.data.map((item) => (
                                        <MenuItem
                                            key={item.name}
                                            value={item.id}
                                        >
                                            {item.stock.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="number"
                                    size="small"
                                    name="quantity"
                                    label="Quantity"
                                    value={handleMinDigit(product.quantity)}
                                    onChange={(e) => {
                                        handleProductChange(
                                            index,
                                            "quantity",
                                            e.target.value,
                                        );
                                        const value =
                                            e.target.value === ""
                                                ? 0
                                                : parseFloat(e.target.value);
                                    }}
                                    sx={{ gridColumn: "span 1" }}
                                    helperText={
                                        quantityError.find(
                                            (error) => error.index === index,
                                        )?.error || ""
                                    }
                                    error={
                                        !!quantityError.find(
                                            (error) => error.index === index,
                                        )
                                    }
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="number"
                                    size="small"
                                    name="price"
                                    label="Price"
                                    inputProps={{
                                        readOnly: true,
                                        min: 0,
                                    }}
                                    value={product.price}
                                    onChange={(e) =>
                                        handleProductChange(
                                            index,
                                            "product_id",
                                            e.target.value,
                                        )
                                    }
                                    sx={{ gridColumn: "span 1" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    size="small"
                                    type="amount"
                                    name="amount"
                                    label="Amount"
                                    inputProps={{
                                        readOnly: true,
                                        min: 1,
                                    }}
                                    value={product.amount}
                                    sx={{ gridColumn: "span 1" }}
                                />
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ gridColumn: "span 1" }}
                                        onClick={() => removeProduct(index)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </Box>
                        ))}
                    </Box>
                    <SubmitButton
                        title="Create"
                        processing={processing}
                        disabled={
                            data.soldProducts.length == 0 ||
                            quantityError.length > 0
                        }
                    />
                </form>
            </Box>
        </Layouts>
    );
};

export default SaleCreate;
