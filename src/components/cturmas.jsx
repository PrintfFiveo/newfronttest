import { useState } from 'react';
import axios from 'axios';
import './turmas.css';

const BASE_URL = 'https://grand-newt-enhanced.ngrok-free.app/api/';

const PostTurmas = () => {
  const [turmaName, setTurmaName] = useState('');
  const [turmaAno, setTurmaAno] = useState('');
  const [ano, setAno] = useState('');
  const [turma, setTurma] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const result = await axios.post(BASE_URL, {
        turma_name: turmaName,
        turma_ano: turmaAno,
        ano: ano,
        turma: turma,
      });

      setResponse(result.data);
    } catch (err) {
      console.error('Erro ao criar turma:', err.response ? err.response.data : err.message);
      setError('Falha ao criar turma. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-turmas-container">
      <form onSubmit={handleSubmit} className="post-turmas-form">
        <h2>Criar Turma</h2>
        <input
          type="text"
          value={turmaName}
          onChange={(e) => setTurmaName(e.target.value)}
          placeholder="Nome da Turma"
          required
        />
        <input
          type="text"
          value={turmaAno}
          onChange={(e) => setTurmaAno(e.target.value)}
          placeholder="Ano da Turma"
          required
        />
        <input
          type="number"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Ano"
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Turma'}
        </button>
        {error && <p className="error-message">{error}</p>}
        {response && (
          <div className="response-data">
            <h3>Resposta:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default PostTurmas;
