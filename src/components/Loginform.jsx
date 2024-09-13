import{ useState } from 'react';
import axios from 'axios';
import './FormComponent.css';

const Login = ({ setToken, switchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://grand-newt-enhanced.ngrok-free.app/api/login', { email, password });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('authToken', token);
      setError('');
    } catch (err) {
      setError('Falha ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>*não é obrigatorio*</p>

        <br></br>
        <a>vá para o icone de lupa para pular esta parte</a>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        <p>
          Não tem uma conta? <button type="button" onClick={switchToRegister} className="switch-button">Registre-se</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
