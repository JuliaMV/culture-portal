import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from 'gatsby-link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    position: 'fixed',
    margin: theme.spacing(1),
    minWidth: 55,
    zIndex: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectLanguage({ langs, url }) {
  // @ts-ignore
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lang: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const menuItems = langs.map(lang => (
    <MenuItem value={lang.langKey} key={`${lang.langKey}-key`}>
      <Link to={lang.link}>
        {lang.langKey}
      </Link>
    </MenuItem>
  ));
  // object with keys {langKey, selected, link}

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-lang-simple">
          {url.slice(1, -1)}
        </InputLabel>
        <Select
          value={values.lang}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="lang" id="outlined-lang-simple" />}
        >
          {menuItems}
        </Select>
      </FormControl>
    </form>
  );
}

SelectLanguage.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
};
