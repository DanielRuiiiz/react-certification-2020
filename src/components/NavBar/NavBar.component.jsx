import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import BurgerMenu from './BurgerMenu.component';
import UserMenu from './UserMenu.component';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
  },
}));

const NavBar = () => {
  const navBarClasses = useStyles();
  return (
    <AppBar>
      <Toolbar edge="start">
        <BurgerMenu />
        <div className={navBarClasses.grow} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
