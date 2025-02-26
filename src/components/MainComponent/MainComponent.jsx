import React, { useContext } from 'react'
import { AppContext } from '../../App'

const MainComponent = () => {
     const {count, setCount} = useContext(AppContext)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

export default MainComponent