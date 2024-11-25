import PrimaryButton from "@/Components/PrimaryButton";
import Landinglayout from "@/Layouts/Landinglayout";
import { Head, useForm } from "@inertiajs/react";
import { Box, TextField, useMediaQuery } from "@mui/material";

export default function Register() {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        contact: "",
        shop_name: "",
        shop_address: "",
        shop_contact: "",
        password: "",
        password_confirmation: "",
        address: "",
        domain: "",
    });
    const submit = (e) => {
        e.preventDefault();

        post(route("registering"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    return (
        <Landinglayout>
            <Head title="Register" />
            <div className="section mx-auto max-w-[700px]">
                <h1 className="heading text-gray-300 text-center my-4">
                    Register your new <span className="text-primary">IMS</span>{" "}
                    Shop
                </h1>
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
                            sx={{ gridColumn: "span 4", background: "#fff" }}
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
                            sx={{ gridColumn: "span 4", background: "#fff" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="tel"
                            name="contact"
                            label="Your Contact"
                            value={data.contact}
                            helperText={errors.contact ? errors.contact : ""}
                            onChange={(e) => setData("contact", e.target.value)}
                            error={errors.contact ? true : false}
                            sx={{ gridColumn: "span 2", background: "#fff" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="tetx"
                            name="address"
                            label="Your Address"
                            value={data.address}
                            helperText={errors.address ? errors.address : ""}
                            onChange={(e) => setData("address", e.target.value)}
                            error={errors.address ? true : false}
                            sx={{ gridColumn: "span 2", background: "#fff" }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="shop_name"
                            label="Shop Name"
                            value={data.shop_name}
                            helperText={
                                errors.shop_name ? errors.shop_name : ""
                            }
                            onChange={(e) =>
                                setData("shop_name", e.target.value)
                            }
                            error={errors.shop_name ? true : false}
                            sx={{ gridColumn: "span 4", background: "#fff" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="domain"
                            label="Shop Domain"
                            value={data.domain}
                            helperText={errors.domain ? errors.domain : ""}
                            onChange={(e) => setData("domain", e.target.value)}
                            error={errors.domain ? true : false}
                            sx={{ gridColumn: "span 4", background: "#fff" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="shop_address"
                            label="Shop Address"
                            value={data.shop_address}
                            helperText={
                                errors.shop_address ? errors.shop_address : ""
                            }
                            onChange={(e) =>
                                setData("shop_address", e.target.value)
                            }
                            error={errors.shop_address ? true : false}
                            sx={{ gridColumn: "span 2", background: "#fff" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="tel"
                            name="shop_contact"
                            label="Shop Contact"
                            value={data.shop_contact}
                            helperText={
                                errors.shop_contact ? errors.shop_contact : ""
                            }
                            onChange={(e) =>
                                setData("shop_contact", e.target.value)
                            }
                            error={errors.shop_contact ? true : false}
                            sx={{ gridColumn: "span 2", background: "#fff" }}
                        />

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
                            sx={{ gridColumn: "span 2", background: "#fff" }}
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
                            sx={{ gridColumn: "span 2", background: "#fff" }}
                        />
                    </Box>
                    <div className="mt-4 flex items-center justify-end">
                        {/* <Link
                            href={route("login")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link> */}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Landinglayout>
    );
}

// <div>
// <InputLabel htmlFor="name" value="Name" />

// <TextInput
//     id="name"
//     name="name"
//     value={data.name}
//     className="mt-1 block w-full"
//     autoComplete="name"
//     isFocused={true}
//     onChange={(e) => setData('name', e.target.value)}
//     required
// />

// <InputError message={errors.name} className="mt-2" />
// </div>

// <div className="mt-4">
// <InputLabel htmlFor="email" value="Email" />

// <TextInput
//     id="email"
//     type="email"
//     name="email"
//     value={data.email}
//     className="mt-1 block w-full"
//     autoComplete="username"
//     onChange={(e) => setData('email', e.target.value)}
//     required
// />

// <InputError message={errors.email} className="mt-2" />
// </div>

// <div className="mt-4">
// <InputLabel htmlFor="password" value="Password" />

// <TextInput
//     id="password"
//     type="password"
//     name="password"
//     value={data.password}
//     className="mt-1 block w-full"
//     autoComplete="new-password"
//     onChange={(e) => setData('password', e.target.value)}
//     required
// />

// <InputError message={errors.password} className="mt-2" />
// </div>

// <div className="mt-4">
// <InputLabel
//     htmlFor="password_confirmation"
//     value="Confirm Password"
// />

// <TextInput
//     id="password_confirmation"
//     type="password"
//     name="password_confirmation"
//     value={data.password_confirmation}
//     className="mt-1 block w-full"
//     autoComplete="new-password"
//     onChange={(e) =>
//         setData('password_confirmation', e.target.value)
//     }
//     required
// />

// <InputError
//     message={errors.password_confirmation}
//     className="mt-2"
// />
// </div>
