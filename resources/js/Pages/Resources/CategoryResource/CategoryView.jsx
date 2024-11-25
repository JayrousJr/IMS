import Description from "@/Components/Description";
import SubmitButton from "@/Components/SubmitButton";
import Layouts from "@/Layouts/Layouts";
import { Head, useForm } from "@inertiajs/react";
import { Box, TextField, useMediaQuery } from "@mui/material";

const CategoryView = ({ category }) => {
    const { data, put, processing, errors, setData } = useForm({
        name: category?.data.name,
        description: category?.data.description,
    });
    function handleSubmit(e) {
        e.preventDefault();
        put(route("category.update", category.data.id), data);
    }
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <Layouts name="Categories">
            <Head title="Categories" />
            <Description title="Create Category" link={null} />
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
                            label="Category Name"
                            defaultValue={data.name}
                            helperText={errors.name ? errors.name : ""}
                            onChange={(e) => setData("name", e.target.value)}
                            error={errors.name ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={7}
                            variant="filled"
                            type="text"
                            name="description"
                            label="Category Description"
                            defaultValue={data.description}
                            helperText={
                                errors.description ? errors.description : ""
                            }
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            error={errors.description ? true : false}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <SubmitButton title="Create" />
                </form>
            </Box>
        </Layouts>
    );
};

export default CategoryView;
