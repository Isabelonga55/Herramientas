import React, { useEffect, useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-icons/fa6'
import { CartContext } from "../../providers/CartContext"
import imagens from '../../img/agenda-permanente-de-discos-caderno-de-disco.webp'
import "./Productos.css"
function Productos() {
    const [productos, setProductos] = useState([]);
    const { addProductToCart } = useContext( CartContext )

    useEffect(() => {
        fetch('https://proyectoecommerance.onrender.com/productos/getProdList')
            .then(req => req.json()).then(result => setProductos(result.data))
    }, [])

    return (
        <div className='products'>
            {productos.map(producto => {
                return (
                    <Card key={producto.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagens} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <Card.Text>
                                {producto.precio}
                            </Card.Text>
                            <Button variant="primary">Ver Mas...</Button>
                            <Button variant='success' onClick={ () => addProductToCart(producto) } >Agregar</Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    )
}

export default Productos