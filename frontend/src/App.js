import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/usuario/SignUp';
import Presentacion from './components/presentacion/Presentacion';
import Login from './components/usuario/Login';
import Navegacion from './components/Navegacion/Navegacion';

import Footer from "./components/Footer/Footer"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
        <PayPalScriptProvider options={{ clientId: process.env.REACT_APP_PYPAL_CLIENT_ID, currency: "COP" }}>
          <div className="App">
            <Navegacion />
            <Routes>
              <Route path='/' element={<Presentacion />} />
              <Route path='/SignUp' element={<SignUp />} />
              <Route path='/LogIn' element={<Login />} />
      
            </Routes>
          </div>
          <Footer/>
        </PayPalScriptProvider>
  );
}

export default App;
