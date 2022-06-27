import React from 'react'
import { useSelector } from 'react-redux'

const Aside = () => {

    const userName = useSelector( state => state.userName)

  return (
    <aside className='aside_container'>
        <h1 className='aside_title'>
            <span className='aside_span'>Welcome {userName}</span> 
        , let's prepare you for battle!!
        </h1>
    </aside>
  )
}

export default Aside