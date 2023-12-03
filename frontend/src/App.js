import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Presentacion from './components/presentacion/Presentacion';
import Navegacion from './components/Navegacion/Navegacion';
import Footer from "./components/Footer/Footer"
import IA from "./components/IA/ia"
import School from "./components/School/School"
import Extenciones from "./components/Extenciones/Extenciones"
function App() {

  return (
          <div className="App">
            <Navegacion />
            <Routes>
              <Route path='/' element={<Presentacion />} />
              <Route path='/IA' element={<IA />} />
              <Route path='/School' element={<School />} />
              <Route path='/Extenciones' element={<Extenciones />} />
            </Routes>
            <Footer/>
          </div>
         
  );
}

export default App;
