import { useEffect } from 'react';
import './App.css';
import Usuarios from './components/usuario/Usuario';

function App() {

  useEffect(() => {
    fetch("http://localhost:3001/productos/getProdList")
      .then(req => req.json()).then(response => console.log(response))

  }, [])

  return (
    <div className="App">
      <Usuarios />
    </div>
  );
}

export default App;
