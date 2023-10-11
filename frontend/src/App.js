
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import SignUp from './components/usuario/SignUp';
import Presentacion from './components/presentacion/Presentacion';
import Login from './components/usuario/Login';
import Navegacion from './components/Navegacion/Navegacion';
import Productos from './components/Productos/Productos';

function App() {

  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Presentacion />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/LogIn' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
