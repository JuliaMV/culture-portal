import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import HomeIcon from '@material-ui/icons/Home';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

import ListItemIcon from '@material-ui/core/ListItemIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    margin: '0 auto',
  },
  inline: {
    display: 'inline',
  },
  icon: {
    margin: theme.spacing(2),
    color: red[400],
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
    </SvgIcon>
  );
}

const ArtistList = ({ content }) => {
  const classes = useStyles({});

  const listItems = content.map((contentItem) => {
    const {
      content: [{ value }],
    } = contentItem;

    return (
      <ListItem lignitems="flex-start" key={value.slice(0, 10)}>
        <ListItemIcon>
          <HomeIcon className={classes.icon} color="secondary" />
        </ListItemIcon>
        <ListItemText
          primary={(
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                {value}
              </Typography>
            </>
          )}
        />
      </ListItem>
    );
  });

  return <List className={classes.root}>{listItems}</List>;
};
export default ArtistList;

ArtistList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
