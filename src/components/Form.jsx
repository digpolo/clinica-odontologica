import React, { useState } from 'react';
import CardForm from './CardForm';


const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: '',
    email: ''
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (cliente.nombre.length > 3 && !cliente.nombre.startsWith(' ')) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }
  }
  console.log(cliente)

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label >Ingresa tu nombre</label>
        <input type="text" value={cliente.nombre} onChange={(event) => setCliente({ ...cliente, nombre: event.target.value.trimStart() })} />
        <label >Cuál es tu email?</label>
        <input type="email" value={cliente.email} onChange={(event) => setCliente({ ...cliente, email: event.target.value.trimStart() })} />
        <button>Enviar</button>
      </form>
      {show ?
        <>
          <CardForm nombre={cliente.nombre} />
        </>
        :
        null
      }
      {error && <h5 style={{ color: 'red' }}>Por favor, verifique que los datos sean correctos</h5>}
    </div>
  );
};

export default Form;
