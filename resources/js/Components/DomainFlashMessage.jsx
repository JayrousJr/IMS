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

export default function DomainFlashMessage() {
    const { flash } = usePage().props;
    const url = `http://${flash?.domain}:8000`;
    React.useEffect(() => {
        if (flash?.domain) {
            setMessage(url);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 50000);
        }
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = React.useState(url);
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
                            The Link to your IMS Account is
                        </Typography>
                        <a
                            href={url}
                            className="text-primary hover:text-dark-100"
                            target="_blank"
                        >
                            {message}
                        </a>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
