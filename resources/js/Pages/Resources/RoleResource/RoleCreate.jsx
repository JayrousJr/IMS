import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    useMediaQuery,
} from "@mui/material";

const RoleCreate = ({ permisions }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        permission_id: [], // Ensure `permission_id` is initialized as an array
    });

    const handleCheckboxChange = (id) => {
        setData("permission_id", (prev) => {
            // Ensure prev is always an array
            const currentPermissions = Array.isArray(prev) ? prev : [];
            if (currentPermissions.includes(id)) {
                // Remove if already selected
                return currentPermissions.filter((permId) => permId !== id);
            } else {
                // Add if not already selected
                return [...currentPermissions, id];
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("role.store", data), {
            onSuccess: () => {
                reset(); // Reset all fields
            },
        });
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");

    return (
        <Layouts>
            <Head title="Role Create" />
            <Description title="Role Create" link={null} />
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
                        {/* Role Name Field */}
                        <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            name="name"
                            label="Role Name"
                            value={data.name} // Bind to `data.name`
                            helperText={errors.name || ""}
                            onChange={(e) => setData("name", e.target.value)}
                            error={!!errors.name}
                            sx={{ gridColumn: "span 4" }}
                        />

                        {/* Permissions Field */}
                        <FormGroup sx={{ gridColumn: "span 4" }}>
                            {permisions?.data.map((permision) => (
                                <FormControlLabel
                                    key={permision.id}
                                    control={
                                        <Checkbox
                                            checked={
                                                Array.isArray(
                                                    data.permission_id,
                                                )
                                                    ? data.permission_id.includes(
                                                          permision.id,
                                                      )
                                                    : false
                                            }
                                            onChange={() =>
                                                handleCheckboxChange(
                                                    permision.id,
                                                )
                                            }
                                        />
                                    }
                                    label={permision.name}
                                />
                            ))}
                        </FormGroup>
                        {errors.permission_id && (
                            <span style={{ color: "red" }}>
                                {errors.permission_id}
                            </span>
                        )}
                    </Box>
                    {/* Submit Button */}
                    <SubmitButton title="Create" processing={processing} />
                </form>
            </Box>
        </Layouts>
    );
};

export default RoleCreate;
