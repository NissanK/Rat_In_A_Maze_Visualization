import React, { useContext } from 'react'
import { GenerateContext, NoAnswerContext } from './Main'

function NoValidAnswer() {
    const setGenerateMatrix = useContext(GenerateContext)[1];
    const setNoAnswer = useContext(NoAnswerContext)[1];
  return (
    <div className='flexContainer flexDirectionCol'>
        <div className='flexContainer generalText'>There are No Valid Solutions!</div>
        <button className='submit' id='newMatrixButton' onClick={()=>{setGenerateMatrix(1);setNoAnswer(0);}}>Generate another Matrix?</button>
    </div>
  )
}

export default NoValidAnswer