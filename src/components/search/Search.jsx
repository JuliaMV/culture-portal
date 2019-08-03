import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import artistCardStyles from './artistCardStyles.module.scss';

const ArtistInfo = queryData => (
  <Card key={`${queryData.node.slug}-item`} className={artistCardStyles.artistCard}>
    <CardMedia
      className={artistCardStyles.artistImage}
      image={queryData.node.personalPhoto.file.url}
      alt={queryData.node.personalPhoto.title}
      title="Contemplative Reptile"
    />
    <CardContent className={artistCardStyles.artistDescriptions}>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          <CardActions>
            <Link to={`en/artists/${queryData.node.slug}`}>
              {`${queryData.node.name.name} ${queryData.node.patronymic.patronymic} ${queryData.node.surname.surname}`}
            </Link>
          </CardActions>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {queryData.node.yearsOfLife}
        </Typography>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          <Link href={queryData.node.videoTag.videoTag} target="_blank" rel="noopener noreferrer">
                YOUTUBE VIDEO
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link to={`ru/artists/${queryData.node.slug}`}>
              READ MORE
          </Link>
        </Button>
      </CardActions>
    </CardContent>
  </Card>
);

class Search extends Component {
  static searchFor(edge, query) {
    const searchKeys = edge.node.searchKeys.split(',');
    return searchKeys.some(key => key.includes(query.toLowerCase()));
  }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    const searchQuery = query.trim();
    const { searchData } = this.props;
    const searchItems = searchData.filter(edge => Search.searchFor(edge, searchQuery));
    const searchResultItems = searchItems ? searchItems.map(edge => ArtistInfo(edge)) : null;
    return (
      <div>
        <form>
          <input
            type="text"
            value={query}
            onChange={this.searchHandler}
          />
        </form>
        {searchResultItems.length > 0
          ? <ul className="artists-list">{searchResultItems}</ul>
          : <p>No results found</p>}
      </div>
    );
  }
}

Search.propTypes = {
  searchData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
