

import './Home.css';
import CustomCursor from '../components/customCursor';
import NavBar from '../components/NavBar';
import Register from '../components/forms';
import Login from '../components/Loginform';
import Logout from '../components/Logout';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const [token, setToken] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);

  return (
    
    <div className="page-wrapper">
    <CustomCursor></CustomCursor>
    <NavBar name="Home"></NavBar>
      {token ? (
        <Logout setToken={setToken} />
      ) : isRegistering ? (
        <Register setToken={setToken} />
      ) : (
        <Login setToken={setToken} switchToRegister={switchToRegister} />
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
