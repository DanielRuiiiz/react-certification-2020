import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import MediaQuery from 'react-responsive';
import Breakpoints from '../../utils/breakpoints';

const UserMenu = () => {
  return (
    <MediaQuery minWidth={Breakpoints.medium}>
      {(matches) =>
        matches ? (
          <IconButton>
            <AccountCircle />
          </IconButton>
        ) : (
          <IconButton>
            <MoreIcon />
          </IconButton>
        )
      }
    </MediaQuery>
  );
};

export default UserMenu;
