
import  { useState, useEffect } from 'react';
import axios from 'axios';

const UserUpdate = () => {
    const [userData, setUserData] = useState({ name: '', email: '', turma_id: '' });
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newTurmaId, setNewTurmaId] = useState('');

    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('id');

    useEffect(() => {
        if (userId && token) {
            axios.get(`https://grand-newt-enhanced.ngrok-free.app/api/users/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    setUserData(response.data);
                    setNewName(response.data.name);
                    setNewEmail(response.data.email);
                    setNewTurmaId(response.data.turma_id);
                })
                .catch(error => console.error('Erro ao buscar dados do usuário:', error));
        }
    }, [userId, token]);

    const handleUpdateUser = () => {
        if (userId && token) {
            axios.patch(`https://grand-newt-enhanced.ngrok-free.app/api/login/${userId}`, {
                name: newName,
                email: newEmail,
                turma_id: newTurmaId
            }, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => {
                    setUserData(response.data);
                    alert('Dados atualizados com sucesso!');
                })
                .catch(error => console.error('Erro ao atualizar dados do usuário:', error));
        }
    };

    return (
        <div>
            <h3>Atualizar Informações</h3>
            <label>
                Nome:
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Turma ID:
                <input
                    type="text"
                    value={newTurmaId}
                    onChange={(e) => setNewTurmaId(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleUpdateUser}>Atualizar</button>
        </div>
    );
};

export default UserUpdate;
