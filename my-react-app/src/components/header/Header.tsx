import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from "react";
import styles from './Header.module.scss';

 const Header: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={styles.toolbar}>
                    <Typography className={styles.title}
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}>
                        PRODUCT PAGE
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;