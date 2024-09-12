
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/frontendexpo/Search" element={<App />} />

    </Routes>
  </Router>
);
