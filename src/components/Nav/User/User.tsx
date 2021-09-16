import React, { useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { Avatar, Button, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const User: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { user, logout, loginWithRedirect } = useAuth0();
    const classes = useStyles();

    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    return (
        <>
            {!user ? (
                <Button color="inherit" onClick={() => loginWithRedirect()}>
                    <div className={classes.button}>
                        <Typography color='primary' variant='subtitle2'>
                            Login
                        </Typography>
                    </div>
                </Button>
            ) : (
                <div>
                    <IconButton
                        className={classes.iconButton}
                        aria-label={user.name}
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenu}
                    >
                        <Avatar src={user.picture} alt={user.name} />
                        <Typography className={classes.name}>
                            {user.name}
                        </Typography>
                        <ExpandMoreIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => logout()}>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </>
    );
};

export default User;
