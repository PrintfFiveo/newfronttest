import  { useState } from 'react';
import axios from 'axios';
import './get.css';

const PostPresence = () => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://grand-newt-enhanced.ngrok-free.app/api/presentes', { student_id: studentId });
      setSuccess('Presença registrada com sucesso!');
      setError('');
    } catch (err) {
      console.error('Erro ao registrar presença:', err.response ? err.response.data : err.message);
      setError('Falha ao registrar presença. Tente novamente.');
    }
  };

  return (
    <div className="post-presence-container">
      <form className="post-presence-form" onSubmit={handleSubmit}>
        <h2>Registrar Presença</h2>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="ID do Usuário"
          required
        />
        <button type="submit">Registrar Presença</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default PostPresence;
