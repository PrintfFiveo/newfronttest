
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '.././App';
import Home from './Home';
import Home2 from './Home2';


const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/frontendexpo" element={<Home />} />
      <Route path="/frontendexpo/Search" element={<App/>} />
      <Route path="/Home2" element={<Home2 />} />
    </Routes>
  </Router>
);
