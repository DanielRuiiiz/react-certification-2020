import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

const StyledList = styled(List)`
  width: 250px;
`;
const BurgerMenu = ({ authenticated }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const toggleDrawer = (state) => (event) => {
    event.preventDefault();
    setOpen(state);
  };

  const FavoritesSelected = () => {
    toggleDrawer(!open);
    history.push('/favorites');
  };

  const HomeSelected = () => {
    toggleDrawer(!open);
    history.push('/');
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer(!open)} data-testid="menu-icon">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(!open)}>
        <StyledList>
          <ListItem onClick={HomeSelected} data-testid="home-icon">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <Divider />
          {authenticated ? (
            <>
              <ListItem onClick={FavoritesSelected} data-testid="favorite-icon">
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText>Favorites</ListItemText>
              </ListItem>
              <Divider />
            </>
          ) : null}
        </StyledList>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
