import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../context/context'

const Card = ({item}) => {

  const {favs, dispatch} = useCharStates()

  const findFav = favs.find((fav) => fav.id == item.id)

  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to={'/detail/' + item.id}>
        <h4>{item.id}</h4>
        <h4><span>Name:</span>{item.name}</h4>
        <h4><span>User name:</span>{item.username}</h4>
        <img src={item.image} alt="" />
      </Link>
      <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button>
    </div>
  )
}

export default Card
{/* En cada card deberan mostrar en name - username y el id */ }

{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ }

{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ }
