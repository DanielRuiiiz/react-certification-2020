import React, { useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchBar = ({ handleOnFormSubmit }) => {
  const [term, setTerm] = useState('');
  const onInputChange = (event) => {
    const value = event.target;
    setTerm(value);
  };

  const onFormSubmit = (event) => {
    event.prevetDefault();
    handleOnFormSubmit(term);
  };
  const searchBarStyles = useStyles();

  return (
    <div className={searchBarStyles.search}>
      <form onSubmit={onFormSubmit}>
        <div className={searchBarStyles.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: searchBarStyles.inputRoot,
            input: searchBarStyles.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
