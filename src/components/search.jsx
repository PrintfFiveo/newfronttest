import { useState } from 'react';
import FetchData from './get'; // Certifique-se de que o caminho está correto
import './searchBar.css'; // Certifique-se de que o caminho está correto

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
        placeholder="Search for turmas..."
      />
      <button onClick={handleSearchClick}>Search</button>
      {searchClicked && query && (
        <FetchData title="Turma Requisitada" endpoint={`turmas/search/${query}`} />
      )}
    </div>
  );
};

export default SearchBar;
