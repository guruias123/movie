import React, { useContext } from 'react'
import { exname } from './Home'

function Home_01() {
  const name = useContext(exname)
  return (
    <>
      <div>HI {name}</div>
    </>
  )
}

export default Home_01