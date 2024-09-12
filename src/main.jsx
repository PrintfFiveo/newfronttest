
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import App2 from './Home/Home';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App2 />} />
      <Route path='/frontendexpo' element={<App2 />} />
      <Route path="/search" element={<App />} />

    </Routes>
  </Router>
);
