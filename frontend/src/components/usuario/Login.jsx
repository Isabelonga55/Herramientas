import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import './SignUp.css'

function Login() {
  
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  })

   const onSave = async (event) =>{
    event.preventDefault();
    
    await fetch('http://localhost:3001/api/logIn', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(resp => resp.json()).then(result => Swal.fire(result.message));
    
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
       
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={formData.password} onChange={onChange} placeholder="Escribe password" />
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

export default Login