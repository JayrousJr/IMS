import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import { Link } from "@inertiajs/react";
import {
    DeleteOutline,
    PrintOutlined,
    RemoveRedEye,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ButtonComponent = ({ mode, data, routeTo }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette?.mode);
    return (
        <div className="flex justify-center mt-[30%]">
            <Box width="50%">
                <Link
                    href={route(`${routeTo}`, data)}
                    className={`flex px-2 py-1 gap-1 justify-center rounded-md items-center`}
                >
                    {mode === "view" && (
                        <RemoveRedEye
                            sx={{
                                fontSize: "20px",
                                color: colors.blueAccent[600],
                            }}
                        />
                    )}
                </Link>
            </Box>
        </div>
    );
};

export default ButtonComponent;
