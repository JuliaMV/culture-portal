import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ArtistList = ({ content }) => {
  const classes = useStyles({});

  const listItems = content.map((contentItem) => {
    const {
      content: [{ value }],
    } = contentItem;

    return (
      <ListItem key={value.slice(0, 10)}>
        <ListItemAvatar>
          {/* <Avatar>
            <HomeIcon />
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={value} />
      </ListItem>
    );
  });

  return <List className={classes.root}>{listItems}</List>;
};
export default ArtistList;

ArtistList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
