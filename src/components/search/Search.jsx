import React, { Component } from 'react';
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

  render() {
    const { query } = this.state;
    const searchQuery = query.trim();
    const { searchData } = this.props;
    const searchItems = searchData.filter(edge => Search.searchFor(edge, searchQuery));
    const searchResultItems = searchItems ? searchItems.map(edge => ArtistCard(edge)) : null;
    const searchLanguage = searchData.map(edge => edge.node.lang);
    const currentLanguage = searchLanguage[0];

    let placeholderText;
    let noResultsMessage;

    switch (currentLanguage) {
      case 'ru':
        placeholderText = 'Поиск';
        noResultsMessage = 'Ничего не найдено';
        break;
      case 'be':
        placeholderText = 'Пошук';
        noResultsMessage = 'Нічога не знойдзена';
        break;
      case 'en':
        placeholderText = 'Search';
        noResultsMessage = 'No results found';
        break;
      default:
        break;
    }

    return (
      <div className={searchStyles.artistsWrapper}>
        <form>
          <input
            className={searchStyles.searchInput}
            type="text"
            value={query}
            placeholder={placeholderText}
            onChange={this.searchHandler}
          />
        </form>
        {searchResultItems.length > 0
          ? <ul className={searchStyles.artistsList}>{searchResultItems}</ul>
          : <p className={searchStyles.errorMessage}>{noResultsMessage}</p>}
      </div>
    );
  }
}

Search.propTypes = {
  searchData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
