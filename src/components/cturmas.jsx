import  { useState } from 'react';

const SubmitForm = () => {

  const [turmaName, setTurmaName] = useState('');
  const [turmaAno, setTurmaAno] = useState('');
  const [ano, setAno] = useState('');
  const [turma, setTurma] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!turmaName || !turmaAno || !ano || isNaN(ano) || ano.length !== 1) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    // Dados a serem enviados
    const data = {
      turma_name: turmaName,
      turma_ano: turmaAno,
      ano: parseInt(ano, 10), // Convertendo para inteiro
      turma: turma,
    };

    try {
    
      const response = await fetch('https://grand-newt-enhanced.ngrok-free.app/api/turmas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Verificando a resposta
      if (response.ok) {
        const result = await response.json();
        console.log('Resposta da API:', result);
        alert('Dados enviados com sucesso!');
      } else {
        console.error('Erro na requisição:', response.statusText);
        alert('Erro ao enviar dados.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar dados.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome da Turma:
          <input
            type="text"
            value={turmaName}
            onChange={(e) => setTurmaName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ano da Turma:
          <input
            type="text"
            value={turmaAno}
            onChange={(e) => setTurmaAno(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ano (único dígito):
          <input
            type="text"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SubmitForm;
