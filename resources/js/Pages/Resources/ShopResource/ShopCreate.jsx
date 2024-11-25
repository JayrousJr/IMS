import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, TextField, useMediaQuery } from "@mui/material";

const ShopCreate = () => {
    const { data, setData, post, processing, errors } = useForm({
        shop_name: "",
        shop_address: "",
        shop_contact: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("shop.store", data));
    };
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Layouts>
            <Head title="Create Shop" />
            <Description title="Create Edit" link={null} />
            <Box m="10px 0 0 0">
                <form onSubmit={handleSubmit}>
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
                            name="shop_name"
                            label="Shop Name"
                            defaultValue={data.shop_name}
                            helperText={
                                errors.shop_name ? errors.shop_name : ""
                            }
                            onChange={(e) =>
                                setData("shop_name", e.target.value)
                            }
                            error={errors.shop_name ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="tel"
                            name="shop_contact"
                            label="Shop Contact"
                            defaultValue={data.shop_contact}
                            helperText={
                                errors.shop_contact ? errors.shop_contact : ""
                            }
                            onChange={(e) =>
                                setData("shop_contact", e.target.value)
                            }
                            error={errors.shop_contact ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="shop_address"
                            name="shop_address"
                            label="Shop Address"
                            defaultValue={data.shop_address}
                            helperText={
                                errors.shop_address ? errors.shop_address : ""
                            }
                            onChange={(e) =>
                                setData("shop_address", e.target.value)
                            }
                            error={errors.shop_address ? true : false}
                            sx={{
                                gridColumn: "span 2",
                            }}
                        />
                    </Box>
                    <SubmitButton title="Create" />
                </form>
            </Box>
        </Layouts>
    );
};

export default ShopCreate;
