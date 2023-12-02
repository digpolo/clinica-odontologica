import React from 'react'
import Card from '../components/Card'
import { useCharStates } from '../context/context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {list} = useCharStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       {list.map(item => <Card item={item} key={item.id}/>)}
      </div>
    </main>
  )
}

export default Home