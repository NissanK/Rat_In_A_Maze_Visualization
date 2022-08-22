import React,{useState,useContext, useEffect,useRef} from 'react'

import {MatrixValues,SolutionsContext,PositionSolutionContext} from './Main';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowDown,faArrowRight,faArrowUp } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used


function SolutionCol(props) {
    const matrixValuesArray = useContext(MatrixValues);
    const matrixValues = matrixValuesArray[0];

    const solutionsArray = useContext(SolutionsContext);
    const validSolution = solutionsArray[0];

    const positionSolutionArray = useContext(PositionSolutionContext);
    const positionSolutionX = positionSolutionArray[0];

    const positionSolutionY = positionSolutionArray[2];

    const elementRef = useRef(null);

    const [bgColor,setBgColor] = useState('lightgreen');
    const [isArrow,setIsArrow] = useState('');

    useEffect(()=>{
        setIsArrow('');
        const n = positionSolutionX.length;
        let isPath = false;
        // console.log(positionSolutionX,positionSolutionY);
        for(let i = 0;i<n;i++){
            if(positionSolutionX[i] === props.r && positionSolutionY[i] === props.c){
                isPath = true;
                setIsArrow(validSolution[i]);
            }
        }
        // console.log(isPath,props.r,props.c);
        if(isPath){
            setBgColor('rgb(96, 231, 231)');
            // console.log("background color set to blue");
        } 
        else if(matrixValues[props.r].row[props.c].valid) setBgColor('lightgreen');
        else setBgColor('rgb(241, 120, 120)');
    },[positionSolutionX,positionSolutionY])
    
    return (
        <div className='solutionCol' ref={elementRef} style={{backgroundColor: bgColor}}>
            {isArrow === 'D' ? <FontAwesomeIcon className='arrow' icon={faArrowDown} /> : null}
            {isArrow === 'U' ? <FontAwesomeIcon className='arrow' icon={faArrowUp} /> : null}
            {isArrow === 'L' ? <FontAwesomeIcon className='arrow' icon={faArrowLeft} /> : null}
            {isArrow === 'R' ? <FontAwesomeIcon className='arrow' icon={faArrowRight} /> : null}
        </div>
    )
}

export default SolutionCol