import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BurgerMenu from './BurgerMenu';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import { useAuth } from '../../providers/Auth';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = ({ handleFormSubmit }) => {
  const navBarClasses = useStyles();
  const { authenticated } = useAuth();
  return (
    <AppBar position="static" data-testid="nav-bar">
      <Toolbar edge="start">
        <BurgerMenu authenticated={authenticated} />
        <SearchBar handleOnFormSubmit={handleFormSubmit} />
        <div className={navBarClasses.grow} />
        <UserMenu authenticated={authenticated} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
