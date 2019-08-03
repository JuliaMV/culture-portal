import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../artistcard/ArtistCard';

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
    const searchResultItems = searchItems ? searchItems.map(edge => ArtistCard(edge)) : null;
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
