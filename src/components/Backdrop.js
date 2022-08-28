import React, { useContext } from 'react'
import { InfoContext } from './Main'

function Backdrop() {
    const setInfoDisplay = useContext(InfoContext)[1];
  return (
    <div className='backdrop' onClick={()=> {setInfoDisplay(0)}}></div>
  )
}

export default Backdrop