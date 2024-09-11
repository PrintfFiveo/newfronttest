

const Home2 = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      <h2>Bem-vindo!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home2;