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
import { getDataGridUtilityClass } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import SalesDetails from "../SalesDetails";

const SaleCreate = ({ products, customers }) => {
    const [stockQuantity, setStockQuantity] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [productId, setProductId] = useState(null);
    const [minDigit, setMindigit] = useState(1);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    function helperText() {
        if (quantityError) return quantityError;
        if (errors.available_quantity) return errors.available_quantity;
        return "";
    }
    const handleMinDigit = (e) => {
        const value = Math.max(1, Number(e.target.value));
        setMindigit(value);
    };
    const initialProduct = {
        product_id: "",
        quantity: 1,
        price: "",
        amount: "",
    };
    const [saleDetails, setSaleDetails] = useState([initialProduct]);

    const addProduct = () => {
        setSaleDetails([...saleDetails, initialProduct]);
    };

    const handleInsertingPrice = (e, prodIndex) => {
        const selectedProductId = e.target.value;
        const selectedProduct = products.data.find(
            (product) => product.id === selectedProductId,
        );
        setProductId(selectedProductId);
        saleDetails[prodIndex].price = selectedProduct.stock.selling_price;
        saleDetails[prodIndex].amount =
            saleDetails[prodIndex].quantity *
            selectedProduct.stock.selling_price;
        setSaleDetails(saleDetails);
        setData((prev) => ({ ...prev, saleDetails }));
    };

    const removeProduct = (index) => {
        const newSaleDetails = saleDetails.filter((_, i) => i !== index);
        setSaleDetails(newSaleDetails);
    };

    const handleProductChange = (index, field, value) => {
        const newSaleDetails = [...saleDetails];
        newSaleDetails[index][field] = value;
        setSaleDetails(newSaleDetails);
    };
    /**
     * Get the product selected from backed
     */

    const calculateTotalAmount = () => {
        const total = saleDetails.reduce(
            (sum, product) => sum + product.price * product.quantity,
            0,
        );
        setData("total_amount", total);
    };

    useEffect(() => {
        calculateTotalAmount();
    }, [saleDetails, discount, saleDetails.quantity]);

    const handleQuantityChange = (e, prodIndex) => {
        const selectedProduct = products.data.find(
            (product) => product.id === productId,
        );
        saleDetails[prodIndex].amount =
            saleDetails[prodIndex].quantity *
            selectedProduct.stock.selling_price;
        setSaleDetails(saleDetails);
        setData((prev) => ({ ...prev, saleDetails }));
    };

    const { data, setData, post, processing, errors } = useForm({
        available_quantity: "",
        customer_id: "",
        total_amount: "",
        status: "",
        discount: 0,
        saleDetails,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("sale.store", data));
    };

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
                            label="Discount Amount"
                            value={data.discount}
                            onChange={(e) =>
                                setData("discount", e.target.value)
                            }
                            error={errors.discount ? true : false}
                            sx={{ gridColumn: "span 1" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="number"
                            name="total_amount"
                            label="Total Amount"
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
                                onClick={addProduct}
                                variant="contained"
                                color="primary"
                            >
                                Add Product
                            </Button>
                        </Box>

                        {saleDetails?.map((detail, index) => (
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
                                    type="text"
                                    name="product_id"
                                    label="Product"
                                    select
                                    value={detail.product_id}
                                    helperText={
                                        errors.product_id
                                            ? errors.product_id
                                            : ""
                                    }
                                    onChange={(e) => {
                                        handleProductChange(
                                            index,
                                            "product_id",
                                            e.target.value,
                                        );
                                        setProductId(e.target.value);
                                        handleInsertingPrice(e, index);
                                        calculateTotalAmount(e);
                                    }}
                                    error={errors.product_id ? true : false}
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
                                    name="price"
                                    label="Price"
                                    value={detail.price}
                                    onChange={(e) =>
                                        handleProductChange(
                                            index,
                                            "price",
                                            e.target.value,
                                        )
                                    }
                                    sx={{ gridColumn: "span 1" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="number"
                                    name="quantity"
                                    label="Quantity"
                                    value={detail.quantity}
                                    onChange={(e) => {
                                        handleProductChange(
                                            index,
                                            "quantity",
                                            e.target.value,
                                        );
                                        // handleQuantityChange(e, index);
                                    }}
                                    sx={{ gridColumn: "span 1" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="amount"
                                    name="amount"
                                    label="Amount"
                                    value={detail.amount}
                                    onChange={(e) =>
                                        handleProductChange(
                                            index,
                                            "amount",
                                            e.target.value,
                                        )
                                    }
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
                        disabled={quantityError}
                    />
                </form>
            </Box>
        </Layouts>
    );
};

export default SaleCreate;
