import React, { useState } from 'react';


const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: '',
    color: ''
})
const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    if (cliente.nombre.length > 3 && !cliente.nombre.startsWith(' ') && cliente.color.length > 6) {
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
}
console.log(cliente)

  return (
    <div>
      <form>
        <label >Ingresa tu nombre</label>
        <input type="text" value={cliente.nombre} onChange={(event) => setCliente({ ...cliente, nombre: event.target.value.trimStart() })} />
        <label >Ingresa tu color favorito (formato HEX)</label>
        <input type="text" value={cliente.color} onChange={(event) => setCliente({ ...cliente, color: event.target.value.trimStart() })} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
