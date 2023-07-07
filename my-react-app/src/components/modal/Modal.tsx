import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Glass from "../ui/glass/Glass.tsx";
import {baseURL} from "../../api/api.ts";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 7,
};

interface IBasicModal {
    src: string;
}

 const BasicModal: React.FC<IBasicModal> = ({ src }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Glass handleOpen={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <img height={"800px"} width={"800px"} src={`${baseURL}${src}`} alt=""/>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;