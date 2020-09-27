import React, { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BurgerMenu from './BurgerMenu';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = ({ handleFormSubmit }) => {
  const navBarClasses = useStyles();
  return (
    <AppBar position="static">
      <Toolbar edge="start">
        <BurgerMenu />
        <SearchBar handleOnFormSubmit={handleFormSubmit} />
        <div className={navBarClasses.grow} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
