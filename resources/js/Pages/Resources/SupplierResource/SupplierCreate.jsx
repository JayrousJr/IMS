import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, TextField, useMediaQuery } from "@mui/material";

const SupplierCreate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("supplier.store", data));
    };
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Layouts>
            <Head title="Create Supplier" />
            <Description title="Supplier Create" link={null} />
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
                            name="name"
                            label="Supplier Name"
                            defaultValue={data.name}
                            helperText={errors.name ? errors.name : ""}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="email"
                            name="email"
                            label="Supplier Email"
                            defaultValue={data.email}
                            helperText={errors.email ? errors.email : ""}
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors.email ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="address"
                            label="Supplier Address"
                            defaultValue={data.address}
                            helperText={errors.address ? errors.address : ""}
                            onChange={(e) => setData("address", e.target.value)}
                            error={errors.address ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            fullWidth
                            variant="filled"
                            type="tel"
                            name="phone"
                            label="Supplier Contact"
                            defaultValue={data.phone}
                            helperText={errors.phone ? errors.phone : ""}
                            onChange={(e) => setData("phone", e.target.value)}
                            error={errors.phone ? true : false}
                            sx={{ gridColumn: "span 2" }}
                        />
                    </Box>
                    <SubmitButton title="Create" />
                </form>
            </Box>
        </Layouts>
    );
};

export default SupplierCreate;
