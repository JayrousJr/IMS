import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";

const ShopView = ({ shop }) => {
    const { data, put, processing, errors, setData } = useForm({
        shop_name: shop?.data.shop_name,
        shop_address: shop?.data.shop_address,
        shop_contact: shop?.data.shop_contact,
        suspended: shop?.data.suspended,
    });
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("shop.update", shop.data.id), data);
    };

    return (
        <Layouts>
            <Head title="Edit Shop" />
            <Description title="Shop Edit" link={null} />
            <Box m="10px 0 0 0">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-[20px] font-semibold  text-center py-4">
                        Edit Shop Details
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
                            sx={{ gridColumn: "span 2" }}
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
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="suspended"
                            label="Suspend Shop"
                            select
                            value={data.suspended}
                            helperText={
                                errors.suspended
                                    ? errors.suspended
                                    : "Stop the shop from using operating"
                            }
                            onChange={(e) =>
                                setData("suspended", e.target.value)
                            }
                            error={errors.suspended ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            <MenuItem value={0}>Active</MenuItem>
                            <MenuItem value={1}>Suspended</MenuItem>
                        </TextField>
                    </Box>
                    <SubmitButton title="Update Shop" />
                </form>
            </Box>
        </Layouts>
    );
};

export default ShopView;
