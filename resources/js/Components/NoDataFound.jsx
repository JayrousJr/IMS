import { Box, Typography } from "@mui/material";
import React from "react";

const NoDataFound = () => {
    return (
        <Box m="10px 0 0 0">
            <Typography
                variant="h5"
                textAlign="center"
                className="text-primary"
            >
                No Data Found
            </Typography>
        </Box>
    );
};

export default NoDataFound;
