import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Card,
    CardContent,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import { isManager } from "@/utils/auth";
const UserView = ({ users, shops, roles }) => {
    const { data, put, processing, errors, setData } = useForm({
        name: users?.data.name,
        email: users?.data.email,
        password: users?.data.password,
        role_id: users?.data.role.id,
        phone: users?.data.phone,
        shop_id: users?.data.shop.id,
        suspended: users?.data.suspended,
    });

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("user.update", users.data.id), data);
    };

    const userData = [
        {
            title: "Name",
            value: data.name,
        },
        {
            title: "Status",
            value: users?.data.suspended == 0 ? "Active" : "Suspended",
        },
        {
            title: "Role",
            value: users?.data.role.name,
        },
        {
            title: "Shop Enrolled",
            value: users?.data.shop.shop_name,
        },
    ];
    return (
        <Layouts name="User">
            <Head title="Create User" />
            <Description title="User Edit" link={null} />
            <Box m="10px 0 0 0">
                <section className="section grid grid-cols-2 max-md:grid-cols-1 my-4 gap-4">
                    {userData.map((item, index) => (
                        <Card sx={{ minWidth: 275 }} variant="outlined">
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
                                    variant="h5"
                                    component="p"
                                    className="text-primary"
                                >
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </section>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-[20px] font-semibold  text-center py-4">
                        You can chage the following informations for this user
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
                            type="tel"
                            name="phone"
                            label="Contact"
                            defaultValue={data.phone}
                            helperText={errors.phone ? errors.phone : ""}
                            onChange={(e) => setData("phone", e.target.value)}
                            error={errors.phone ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        {isManager() && (
                            <>
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
                                    onChange={(e) =>
                                        setData("role_id", e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setData("shop_id", e.target.value)
                                    }
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
                                    type="text"
                                    name="suspended"
                                    label="Suspend"
                                    select
                                    value={data.suspended}
                                    helperText={
                                        errors.suspended
                                            ? errors.suspended
                                            : "Stop the user from using the system"
                                    }
                                    onChange={(e) =>
                                        setData("suspended", e.target.value)
                                    }
                                    error={errors.suspended ? true : false}
                                    sx={{ gridColumn: "span 2" }}
                                >
                                    <MenuItem value={1}>Suspended</MenuItem>
                                    <MenuItem value={0}>Active</MenuItem>
                                </TextField>
                            </>
                        )}
                        <TextField
                            fullWidth
                            variant="filled"
                            type="password"
                            name="password"
                            label="Password"
                            defaultValue={data.password}
                            helperText={errors.password ? errors.password : ""}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors.password ? true : false}
                            sx={{
                                gridColumn: `${isManager() ? "span 2" : "span 4"}`,
                            }}
                        />
                    </Box>
                    <SubmitButton title="Update User" />
                </form>
            </Box>
        </Layouts>
    );
};

export default UserView;

{
    /* <div className="flex flex-col gap-2 bg-grey-gradient-2 px-4 py-2 rounded-xl">
                            <h1 className="text-[18px]">{item.title}</h1>
                            <p
                                className={`text-primary text-bold ${users.data.suspended != 0 && "text-red-500"}`}
                            >
                                {item.value}
                            </p>
                        </div> */
}
