import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/usuario/SignUp';
import Presentacion from './components/presentacion/Presentacion';
import Login from './components/usuario/Login';
import Navegacion from './components/Navegacion/Navegacion';
import Productos from './components/Productos/Productos';
import { TokenProvider } from "./providers/TokenContext";
import { CartProvider } from "./providers/CartContext";
import Cart from "./components/cart/cart";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <TokenProvider>
      <CartProvider>
        <PayPalScriptProvider options={{ clientId: process.env.REACT_APP_PYPAL_CLIENT_ID, currency: "COP" }}>
          <div className="App">
            <Navegacion />
            <Routes>
              <Route path='/' element={<Presentacion />} />
              <Route path='/SignUp' element={<SignUp />} />
              <Route path='/Productos' element={<Productos />} />
              <Route path='/LogIn' element={<Login />} />
              <Route path='/cart/list' element={<Cart />} />
            </Routes>
          </div>
        </PayPalScriptProvider>
      </CartProvider>
    </TokenProvider>
  );
}

export default App;
