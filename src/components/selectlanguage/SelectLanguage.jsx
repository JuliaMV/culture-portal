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
    <Link to={lang.link}>
      <MenuItem value={lang.langKey} key={`${lang.langKey}-key`}>
        {lang.langKey}
      </MenuItem>
    </Link>
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

/* import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 10,
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: 20,
  },
}); */


/* const SelectLanguage = ({ langs }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lang: langs.defaultLang,
    name: langs.defaultLang,
  });

  const inputLabel = React.useRef(null);
  const [labelWidth] = React.useState(0); */
/* React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []); */

/* function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const menuItems = langs.map(lang => (
    <MenuItem value={lang.langKey} selected={lang.selected} key={lang.langKey}>
      <Link to={lang.link}>
        {lang.langKey}
      </Link>
    </MenuItem>
  ));

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={values.lang}
          onChange={handleChange}
          input={<OutlinedInput ref={inputLabel} labelWidth={labelWidth} 
          id="outlined-age-simple" />}
          autoWidth
        >
          {menuItems}
        </Select>
        <FormHelperText>
          <FormattedMessage id="selectLanguage" />
        </FormHelperText>
      </FormControl>
    </form>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectLanguage; */
