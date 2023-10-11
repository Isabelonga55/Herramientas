import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-icons/fa6'
function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/productos/getProdList')
            .then(req => req.json()).then(result => setProductos(result.data))
    }, [])

    return (
        <>
            {productos.map(producto => {
                return (
                    <Card key={producto.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <Card.Text>
                                {producto.precio}
                            </Card.Text>
                            <Button variant="primary">Ver Mas...</Button>
                            <Button variant="primary"><Icon.FaCartPlus /></Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </>
    )
}

export default Productos