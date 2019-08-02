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
  constructor(props) {
    super(props);

    this.state = {
      architects: architectsList,
      query: '',
    };
  }

  searchHandler(event) {
    this.setState({ query: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
  searchFor(query) {
    // eslint-disable-next-line func-names
    return function (x) {
      return x.name.toLowerCase().includes(query.toLowerCase())
             || x.surname.toLowerCase().includes(query.toLowerCase())
             || x.city.toLowerCase().includes(query.toLowerCase()) || !query;
    };
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
            onChange={this.searchHandler.bind(this)}
          />
        </form>
        <ul className="architects-list">
          {
          architects.filter(this.searchFor(searchQuery)).map(architect => (
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
