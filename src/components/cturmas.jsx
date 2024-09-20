import { useState } from 'react';

const SubmitForm = () => {
  const [className, setClassName] = useState('');
  const [classYear, setClassYear] = useState('');
  const [year, setYear] = useState('');
  const [classData, setClassData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!className || !classYear || !year || isNaN(year) || year.length !== 1) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    const data = {
      class_name: className,
      class_year: classYear,
      year: parseInt(year, 10),
      class: classData,
    };

    try {
      const response = await fetch('https://grand-newt-enhanced.ngrok-free.app/api/turmas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

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
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ano da Turma:
          <input
            type="text"
            value={classYear}
            onChange={(e) => setClassYear(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ano (único dígito):
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SubmitForm;
