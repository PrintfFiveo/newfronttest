import { useState } from 'react';
import FetchData from './searchpre';
import './searchBar.css'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      setSearchClicked(true);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Ex:A20241"
      />
      <button onClick={handleSearchClick}>Search</button>
      {searchClicked && query && (
        <FetchData title={`Presente da Turma ${query}`}  endpoint={`presentes/${query}`} />
      )}
    </div>
  );
};

export default SearchBar;
