import { useState } from 'react';
import FetchData from './get';
import './searchBar.css';

const SearchBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  

  const handleSearchClick = () => {
     {
      setSearchClicked(true);
    }
  };

  return (
    <div className="search-bar-container">
      <button onClick={handleSearchClick}>Buscar Todas As Turmas</button>
      {searchClicked && (
        <FetchData title="Turma" endpoint={`turmas/`} />
      )}
    </div>
  );
};

export default SearchBar;
