import Button from "@/Components/Button";
import CancelButton from "@/Components/CancelButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PageDescription from "@/Components/PageDescription";
import SelectInput from "@/Components/SelectInput";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

const ProductCreate = ({ categories }) => {
    // console.log(categories);
    const [categoriesData, setCategoriesData] = useState(categories.data);
    // console.log(categoriesData);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        category_id: "",
        price: "",
        description: "",
        expiry_date: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("product.store", data), {
            // onError: () => setIsOpen(true),
            onSuccess: () => {
                reset("name", "description");
            },
        });
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
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    errors={errors.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="category"
                                    value="Category"
                                />
                                <SelectInput
                                    type="text"
                                    name="category_id"
                                    value={data.category_id}
                                    autoComplete="category_id"
                                    isFocused={true}
                                    errors={errors.category_id}
                                    onChange={(e) =>
                                        setData("category_id", e.target.value)
                                    }
                                    categories={categories}
                                />

                                <InputError
                                    message={errors.category_id}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="price" value="Price" />
                                <TextInput
                                    type="numeric"
                                    name="price"
                                    value={data.price}
                                    autoComplete="price"
                                    isFocused={true}
                                    errors={errors.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.price}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="expiry_date"
                                    value="Expire Date"
                                />
                                <TextInput
                                    type="date"
                                    name="expiry_date"
                                    value={data.expiry_date}
                                    autoComplete="expiry_date"
                                    isFocused={true}
                                    errors={errors.expiry_date}
                                    onChange={(e) =>
                                        setData("expiry_date", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.expiry_date}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="description"
                                    value="Description"
                                />
                                <TextArea
                                    type="text"
                                    name="description"
                                    rows="7"
                                    value={data.description}
                                    autoComplete="description"
                                    isFocused={true}
                                    errors={errors.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.description}
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
