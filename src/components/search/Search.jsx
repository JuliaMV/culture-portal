import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import ArtistCard from '../artistcard/ArtistCard';
import searchStyles from './Search.module.scss';

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

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    const { query } = this.state;
    const searchQuery = query.trim();
    const { searchData } = this.props;
    const searchItems = searchData.filter(edge => Search.searchFor(edge, searchQuery));
    const searchResultItems = searchItems ? searchItems.map(edge => ArtistCard(edge)) : null;

    return (
      <div className={searchStyles.artistsWrapper}>
        <form onSubmit={this.submitHandler}>
          <FormattedMessage id="searchPlaceholder">
            {placeholder => (
              <input
                className={searchStyles.searchInput}
                type="text"
                value={query}
                placeholder={placeholder}
                onChange={this.searchHandler}
              />
            )}
          </FormattedMessage>
        </form>
        {searchResultItems.length > 0
          ? <ul className={searchStyles.artistsList}>{searchResultItems}</ul>
          : <p className={searchStyles.errorMessage}><FormattedMessage id="noSearchResults" /></p>}
      </div>
    );
  }
}

Search.propTypes = {
  searchData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
