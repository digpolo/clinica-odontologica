import React from 'react'
import Card from '../components/Card'
import { useCharStates } from '../context/context'

const Favs = () => {

  const {favs} = useCharStates()

  return (
    <div>
      {favs.map(fav => <Card item={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs