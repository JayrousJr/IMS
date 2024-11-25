import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { usePage } from "@inertiajs/react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function NoDomainFlashMessage() {
    const { flash } = usePage().props;
    React.useEffect(() => {
        if (flash?.not_found) {
            setMessage(flash?.not_found);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 15000);
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
                <Box sx={style} display="flex" justifyItems="center">
                    <div>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {message}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Please Enter the email used to register your IMS
                            account, or you may ask your manager to get you the
                            email used.
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
