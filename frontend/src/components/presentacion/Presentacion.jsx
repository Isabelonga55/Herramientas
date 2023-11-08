import React from 'react';
import "./precentacion.css"
//import img from "../../imagenes/pexels-dorota-semla-8969237.jpg";
const Precentacion = () => {
    return (
        <div>
            <div className="precentacion_contenedor">
                <div className='homeBg'>
                {/*<img className='imgBg' src={img} alt="imagenprecentacion" />*/}  

                </div>
                <div className = 'homeContent'>
                    <h1 className='home-h1'>Bienvenidos a Agendas IsaRoRo</h1>
                    <p className='home-p1'>Entra a nuestro catalogo de productos para que te enamores de nuestras lindas Agendas</p>
                </div>
            </div>
        </div>
    );
}

export default Precentacion;