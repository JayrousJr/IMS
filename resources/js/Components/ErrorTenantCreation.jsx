import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { usePage } from "@inertiajs/react";
import { Face, Troubleshoot } from "@mui/icons-material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function ErrorTenantCreation() {
    const { flash } = usePage().props;
    React.useEffect(() => {
        if (flash?.error) {
            setMessage(flash?.error);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 20000);
        }
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = React.useState(null);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
                <Box sx={style} display="flex" justifyItems="center" >
                    <div>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            className="text-red-500 text-center"
                        >
                            Request Failed
                        </Typography>
                        <Typography className="text-center" id="modal-modal-description " sx={{ mt: 2 }}>
                            {message}
                        </Typography>
                        <div className=" text-center text-red-500">
                            <Troubleshoot />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
