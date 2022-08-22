import React,{useState,useContext, useEffect,useRef} from 'react'

import { GenerateContext, MatrixValues} from './Main';

function Col(props) {
    const generateMatrixArray = useContext(GenerateContext);
    const generateMatrix = generateMatrixArray[0];
    const [matrixValues,setMatrixValues] = useContext(MatrixValues);
    
    const elementRef = useRef(null);

    const [bgColor,setBgColor] = useState('lightgreen');

    useEffect(()=>{
        elementRef.current.style = {backgroundColor : 'lightgreen'}
    },[generateMatrix])

    const clickHandler = e =>{
        if(!matrixValues[props.r].row[props.c].valid){
            matrixValues[props.r].row[props.c].valid = 1;
            setMatrixValues(matrixValues);
            setBgColor('lightgreen');
        }
        else{
            matrixValues[props.r].row[props.c].valid = 0;
            setMatrixValues(matrixValues);
            setBgColor('rgb(241, 120, 120)');
        }
    }
    const hoverHandlerIn = () =>{
        if(matrixValues[props.r].row[props.c].valid) setBgColor('lime');
        else setBgColor('rgb(243, 67, 67)');
    }
    const hoverHandlerOut = () =>{
        if(matrixValues[props.r].row[props.c].valid) setBgColor('lightgreen');
        else setBgColor('rgb(241, 120, 120)');
    }
    return (
        <div className='col' ref={elementRef} onMouseOver={hoverHandlerIn} onMouseLeave={hoverHandlerOut} onClick={clickHandler} style={{backgroundColor: bgColor}}></div>
    )
}

export default Col