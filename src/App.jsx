

import './App.css'
import CustomCursor from './components/customCursor'
import NavBar from './components/NavBar';
import SearchBar from './components/search'
import Footer from './components/Footer';

function App() {
   return (
   
    <div className="app">
      
      <NavBar/>
       <CustomCursor></CustomCursor>
        <main className="content">
            <h1>Pesquisar Turmas</h1>
            <SearchBar></SearchBar>
      
      </main>
      <Footer />
    </div>
  );
}

export default App
