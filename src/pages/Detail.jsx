import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios(url)
      setUser(res.data)
    //   axios(url)
    //  .then(res => setUser(res.data))
    }

    fetchUser()
  }, [])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <img src="/images/doctor.jpg"/>
      <h3><span>Name: </span>{user.name}</h3>
      <span>User Name:</span><h4>{user.username}</h4>
      <span>E-mail:</span><h4>{user.email}</h4>
      <span>Phone:</span><h4>{user.phone}</h4>
      
    </div>
    </>
  )
}

export default Detail