import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SelectLanguage = ({ langs }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lang: '',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const menuItems = langs.map(lang => (
    <MenuItem value={lang.langKey} selected={lang.selected}>
      <Link
        to={lang.link}
        key={lang.langKey}
        style={{
          color: 'white',
        }}
      >
        {lang.langKey}
      </Link>
    </MenuItem>
  ));

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={values.lang}
        onChange={handleChange}
        input={<Input name="select-language" />}
        autoWidth
      >
        <MenuItem value="">
          <em>
            <FormattedMessage id="selectLanguage" />
          </em>
        </MenuItem>
        {menuItems}
      </Select>
      <FormHelperText>
        <FormattedMessage id="selectLanguage" />
      </FormHelperText>
    </FormControl>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectLanguage;
