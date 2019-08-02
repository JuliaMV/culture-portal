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
    opacity: 0.9,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectLanguage({ langs }) {
  const classes = useStyles({});

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const menuItems = langs.map(lang => (
    <Link className={selectLanguageStyles.link} to={lang.link}>
      <MenuItem value={lang.langKey} key={`${lang.langKey}-key`}>
        {lang.langKey}
      </MenuItem>
    </Link>
  ));

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-lang-simple">
          <FormattedMessage id="selectLanguage" />
        </InputLabel>
        <Select
          value=""
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
