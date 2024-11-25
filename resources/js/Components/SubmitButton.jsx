import { tokens } from "@/constants/colors";
import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import React from "react";

const SubmitButton = ({ title, processing, disabled }) => {
    const theme = useTheme();
    const colors = tokens(theme.palettes?.mode);
    const back = () => {
        window.history.back();
    };
    function disable() {
        if (processing) return true;
        if (disabled) return true;
    }
    return (
        <Box display="flex" justifyContent="space-between" mt="20px">
            <Button
                type="submit"
                sx={{
                    backgroundColor: colors.greenAccent[400],
                }}
                variant="conatined"
                disabled={disable()}
            >
                {title}
            </Button>
            <Button
                onClick={back}
                sx={{
                    backgroundColor: colors.redAccent[400],
                }}
                variant="conatined"
            >
                Cancel
            </Button>
        </Box>
    );
};

export default SubmitButton;
