import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import { Link } from "@inertiajs/react";
import { AddOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BreadCrumb from "./BreadCrumb";

const Description = ({ title, link }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px" display="flex" justifyContent="space-between">
            <div>
                <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ mb: "1px" }}
                >
                    {title.toUpperCase()}
                </Typography>

                <BreadCrumb page={title}>
                    {title.trim().split(" ")[0]}
                </BreadCrumb>
            </div>
            <div>
                {link !== null && (
                    <Link
                        href={route(`${link}`)}
                        className="flex bg-primary px-3 py-1 rounded-md"
                    >
                        <span>Create</span> <AddOutlined />
                    </Link>
                )}
            </div>
        </Box>
    );
};

export default Description;
