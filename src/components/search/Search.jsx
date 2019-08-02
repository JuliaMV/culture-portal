import React, { Component } from 'react';

const architectsList = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    city: 'Minsk',
  },
  {
    id: 2,
    name: 'Mike',
    surname: 'Hike',
    city: 'Hrodno',
  },
  {
    id: 3,
    name: 'Jane',
    surname: 'Doe',
    city: 'Vitebsk',
  },
  {
    id: 4,
    name: 'Sarah',
    surname: 'Smith',
    city: 'Homel',
  },

];

class Search extends Component {
  static searchFor(query) {
    return x => x.name.toLowerCase().includes(query.toLowerCase())
             || x.surname.toLowerCase().includes(query.toLowerCase())
             || x.city.toLowerCase().includes(query.toLowerCase()) || !query;
  }

  constructor(props) {
    super(props);

    this.state = {
      architects: architectsList,
      query: '',
    };
  }

  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { architects, query } = this.state;
    const searchQuery = query.trim();
    return (
      <div className="App">
        <form>
          <input
            type="text"
            value={query}
            onChange={this.searchHandler}
          />
        </form>
        <ul className="architects-list">
          {
          architects.filter(Search.searchFor(searchQuery)).map(architect => (
            <li
              className="architects-list-item"
              key={architect.id}
            >
              {architect.name}
              {' '}
              {architect.surname}
,
              {' '}
              {architect.city}
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
}

export default Search;
