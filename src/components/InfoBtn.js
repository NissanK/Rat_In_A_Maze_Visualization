import React from 'react'
import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used
import { InfoContext } from './Main'

function InfoBtn() {
    const setInfoDisplay = useContext(InfoContext)[1];
  return (
    <div>
        <button className='info-btn flexContainer' onClick={()=>{setInfoDisplay(1)}}><FontAwesomeIcon icon={faInfo} className="inherit"></FontAwesomeIcon></button>
    </div>
  )
}

export default InfoBtn