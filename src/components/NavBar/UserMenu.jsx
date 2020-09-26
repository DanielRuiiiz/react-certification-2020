import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AccountCircle } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import MediaQuery from 'react-responsive';
import { useAuth } from '../../providers/Auth';
import Breakpoints from '../../utils/breakpoints';

const UserMenu = () => {
  //TODO: Create a 'menu' to show 'login' or 'logout' depending on whether the user is authenticated
  //TODO: Create the open/setOpen state to show the menu when you click on it
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
    setAnchorEl(null);
  }
  const Profile = () => {
    return (
      <>
        <Link to="/login">{'Login'}</Link>
      </>
    );
  };
  const LogoutButton = () => {
    return (
      <>
        <div onClick={deAuthenticate}> Logout </div>
      </>
    );
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
            <IconButton onClick={handleClick}>
              <AccountCircle />
            </IconButton>
            <ProfileMenu />
          </>
        ) : (
          <>
            <IconButton onClick={handleClick}>
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
