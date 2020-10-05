import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AccountCircle } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import MediaQuery from 'react-responsive';
import { useAuth } from '../../providers/Auth';
import Breakpoints from '../../utils/breakpoints';

const UserMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
    setAnchorEl(null);
  };
  const Authenticate = (event) => {
    event.preventDefault();
    history.push('/login');
    setAnchorEl(null);
  };
  const Profile = () => {
    return <MenuItem onClick={Authenticate}>Login</MenuItem>;
  };
  const LogoutButton = () => {
    return <div onClick={deAuthenticate}> Logout </div>;
  };
  const ProfileMenu = () => {
    return (
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>{authenticated ? <LogoutButton /> : <Profile />}</MenuItem>
      </Menu>
    );
  };

  return (
    <MediaQuery minWidth={Breakpoints.medium}>
      {(matches) =>
        matches ? (
          <>
            <IconButton onClick={handleClick} alt="User Logo">
              <AccountCircle />
            </IconButton>
            <ProfileMenu />
          </>
        ) : (
          <>
            <IconButton onClick={handleClick} alt="More Logo Mobile">
              <MoreIcon />
            </IconButton>
            <ProfileMenu />
          </>
        )
      }
    </MediaQuery>
  );
};

export default UserMenu;
