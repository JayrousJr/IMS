import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";
import React from "react";

const UserCreate = ({ shops, roles }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        contact: "",
        address: "",
        email: "",
        password: "",
        password_confirmation: "",
        shop_id: "",
        role_id: "",
    });
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const submit = (e) => {
        e.preventDefault();
        post(route("user.store", data));
    };
    return (
        <Layouts>
            <Head title="Create User" />
            <Description
                title="Users Create"
                subtitle="Create new User"
                link={null}
            />
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
                            label="Full Name"
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
                            name="address"
                            label="Staff Address"
                            value={data.address}
                            helperText={errors.address ? errors.address : ""}
                            onChange={(e) => setData("address", e.target.value)}
                            error={errors.address ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="email"
                            label="E-mail"
                            value={data.email}
                            helperText={errors.email ? errors.email : ""}
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="contact"
                            label="Phone Number"
                            value={data.contact}
                            helperText={errors.contact ? errors.contact : ""}
                            onChange={(e) => setData("contact", e.target.value)}
                            error={errors.contact ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="role_id"
                            label="Role"
                            select
                            value={data.role_id}
                            helperText={
                                errors.role_id
                                    ? errors.role_id
                                    : "Please select the Role of this Staff"
                            }
                            onChange={(e) => setData("role_id", e.target.value)}
                            error={errors.role_id ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            {roles.data.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="shop_id"
                            label="Shop Enrolled"
                            select
                            value={data.shop_id}
                            helperText={
                                errors.shop_id
                                    ? errors.shop_id
                                    : "Please select the shop to enroll this Staff"
                            }
                            onChange={(e) => setData("shop_id", e.target.value)}
                            error={errors.shop_id ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        >
                            {shops.data.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.shop_name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            name="password"
                            label="Password"
                            value={data.password}
                            helperText={errors.password ? errors.password : ""}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors.password ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            name="password_confirmation"
                            label="Confirm Password"
                            value={data.password_confirmation}
                            helperText={
                                errors.password_confirmation
                                    ? errors.password_confirmation
                                    : ""
                            }
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            error={errors.password_confirmation ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </Box>
                    <SubmitButton title="Create user" processing={processing} />
                </form>
            </Box>
        </Layouts>
    );
};

export default UserCreate;
