import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormattedMessage } from 'react-intl';
import Link from 'gatsby-link';
// @ts-ignore
import selectLanguageStyles from './SelectLanguage.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    position: 'absolute',
    top: 20,
    right: 20,
    margin: theme.spacing(1),
    minWidth: 120,
    zIndex: 10,
    color: '#000000',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectLanguage({ langs }) {
  const classes = useStyles({});
  const [values, setValues] = React.useState({
    lang: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const menuItems = langs.map(lang => (
    <MenuItem value={lang.langKey}>
      <Link className={selectLanguageStyles.link} to={lang.link} key={`${lang.langKey}-key`}>
        <FormattedMessage id={lang.langKey} />
      </Link>
    </MenuItem>
  ));

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-lang-simple">
          <FormattedMessage id="selectLanguage" />
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
};
