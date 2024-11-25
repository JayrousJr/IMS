import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

const ProductCreate = ({ stocks }) => {
    const [stockQuantity, setStockQuantity] = useState(null);
    const [quantityError, setQuantityError] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        stock_id: "",
        quantity: "",
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
        if (parseInt(data.quantity) > parseInt(stockQuantity)) {
            setQuantityError(
                `The Quantity you are trying to enter is greater than ${stockQuantity}`,
            );
        } else if (data.quantity <= 0) {
            setQuantityError(
                `The Quantity you are trying to enter is less than the required amount, atleast record 1 product`,
            );
        } else {
            setQuantityError(null);
        }
    }, [data.quantity, stockQuantity]);

    const handleQuantityBlur = () => {
        if (data.quantity > stockQuantity) {
            setQuantityError(
                `The Quantity you are trying to enter is greater than ${stockQuantity}`,
            );
        } else if (data.quantity < 1) {
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
    return (
        <Layouts name="Product Create">
            <Head title="Products" />
            <div className="gap-2 px-8 rounded-xl py-8">
                <PageDescription
                    title="Product"
                    page="List"
                    routeTo="product.index"
                />
                <div className="form-container mt-6 bg-dark-200">
                    <form onSubmit={submit}>
                        <h2 className="text-center heading text-write">
                            Create New Product
                        </h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <InputLabel
                                    htmlFor="stock_id"
                                    value="Product from stock"
                                />
                                <SelectInput
                                    type="text"
                                    name="stock_id"
                                    value={data.stock_id}
                                    autoComplete="stock_id"
                                    isFocused={true}
                                    errors={errors.stock_id}
                                    onChange={(e) => {
                                        setData("stock_id", e.target.value);
                                        const selectedStock = stocks.data.find(
                                            (stock) =>
                                                stock.id == e.target.value,
                                        );
                                        if (selectedStock) {
                                            setStockQuantity(
                                                selectedStock.quantity,
                                            );
                                        } else {
                                            setStockQuantity(null);
                                        }
                                    }}
                                    passedData={stocks}
                                />

                                <InputError
                                    message={errors.stock_id}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="quantity"
                                    value="Quantity"
                                />
                                <TextInput
                                    type="numeric"
                                    name="quantity"
                                    value={data.quantity}
                                    autoComplete="quantity"
                                    isFocused={true}
                                    errors={errors.quantity}
                                    onChange={(e) => {
                                        setData("quantity", e.target.value);
                                    }}
                                    onBlur={handleQuantityBlur}
                                />

                                <InputError
                                    message={quantityError}
                                    className="mt-2"
                                />

                                <InputError
                                    message={errors.quantity}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button disabled={processing}>
                                Create Product
                            </Button>
                            <CancelButton toRoute="product.index" />
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
};

export default ProductCreate;
