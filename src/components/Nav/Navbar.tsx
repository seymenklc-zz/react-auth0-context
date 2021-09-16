import React from 'react';

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles';

// Components
import User from './User/User';

const Navbar: React.FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.container}>
            <AppBar position="static" className={classes.appbar} elevation={1}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Posts
                    </Typography>
                    {/* User Info Section */}
                    <User />
                </Toolbar>
            </AppBar >
        </Container>
    );
};

export default Navbar;
