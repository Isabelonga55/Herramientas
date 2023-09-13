import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './usuario.css'

function Usuarios() {
  
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    password: '',
    email: ''
  })

  const onSave = (event) =>{
    event.preventDefault();
    console.log(formData);
    
    
  }

  const onChange = (e) =>{
      setFormData({
        ...formData, [e.target.name]: e.target.value
      })
  }


  return (
    <>
    <div >
   <div className='form-contenedor'>
   <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="string" value={formData.nombre} onChange={onChange} name='nombre' placeholder="Escribe tu nombre y apellidos" />
       
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" value={formData.telefono} onChange={onChange} name='telefono' placeholder="Escribe tu telefono" />
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={formData.password} onChange={onChange} placeholder="Escribe password" />

        <Form.Text className="text-muted">
         Tu informacion es privada y no sera compartida o reutilizada.
        </Form.Text>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
   </div>
   
    </div>
    </>
  )
}

export default Usuarios