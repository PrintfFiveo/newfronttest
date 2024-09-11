

import './App.css'
import CustomCursor from './components/customCursor'
import NavBar from './components/NavBar';
import SearchBar from './components/search'
import Footer from './components/Footer';
import Presentes from './components/presentes'
import Searchpre from './components/fpresentes'
import Cturmas from './components/cturmas'
function App() {
   return (
   
    <div className="app">
     
      <NavBar name="Turmas"> </NavBar> 
       <CustomCursor></CustomCursor>
        <main className="content">
            <h1>Pesquisar Turmas</h1>
            <SearchBar></SearchBar>
             <Presentes></Presentes>
            <h1>Pesquisar Presença Por Turma</h1>
             <Searchpre></Searchpre>
             <Cturmas></Cturmas>

      </main>
      <Footer />
    </div>
  );
}

export default App
