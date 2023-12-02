import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()
  console.log(id)
  const url = 'https://rickandmortyapi.com/api/character/' + id
  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await axios(url)
      setCharacter(res.data)
      // axios(url)
      // .then(res => setCharacter(res.data))
    }
    fetchCharacter()
  }, [])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
      <h3>{character.name}</h3>
      <h4>{character.username}</h4> 
      <h4>{character.email}</h4> 
      <h4>{character.phone}</h4>
      <h4>{character.website}</h4>
    </div>
    </>
  )
}

export default Detail