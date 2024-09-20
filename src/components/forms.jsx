import { useState } from 'react';
import axios from 'axios';


const Register = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [class_id, setClassId] = useState('');
  const [ra, setRa] = useState('');
  const [period, setPeriod] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://grand-newt-enhanced.ngrok-free.app/api/user', { 
        email, 
        name, 
        password, 
        class_id, 
        ra, 
        period 
      });

      console.log('Resposta da API:', response.data);

      if (response.data && response.data.id) {
        setSuccess('Registro bem-sucedido! Você pode fazer login agora.');
        setError('');
        switchToLogin(); 
      } else {
        setSuccess('Registro Sucedido!');
      }
    } catch (err) {
      console.error('Erro ao registrar:', err.response ? err.response.data : err.message);
      setError('Falha ao registrar. Verifique os detalhes e tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <input
          type="text"
          value={class_id}
          onChange={(e) => setClassId(e.target.value)}
          placeholder="Class ID"
          required
        />
        <input
          type="text"
          value={ra}
          onChange={(e) => setRa(e.target.value)}
          placeholder="RA"
          required
        />
        <input
          type="text"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder="Período"
          required
        />
        <button type="submit">Registrar</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <p>
          Já tem uma conta? <button type="button" onClick={switchToLogin} className="switch-button">Faça login</button>
        </p>
      </form>
    </div>
  );
};

export default Register;
