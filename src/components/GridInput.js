import React,{useEffect,useRef, useContext} from 'react'
import '../Stylesheets/styles.css';
import {DimensionContext, GenerateContext, SolutionsContext} from './Main'

function GridInput() {
    const [rows,setRows,columns,setColumns] = useContext(DimensionContext);
    const [generateMatrix,setGenerateMatrix] = useContext(GenerateContext);
    const [validSolution,setValidSolution,validSolutionCnt,setValidSolutionCnt] = useContext(SolutionsContext);

    const rowInputRef = useRef(null);
    const colInputRef = useRef(null);

    useEffect(()=>{
        rowInputRef.current.focus();
    },[]);

    const setDimensions = () =>{
        if(rowInputRef.current.value > 6 || rowInputRef.current.value < 2 || colInputRef.current.value > 6 || colInputRef.current.value < 2){
            alert("No of rows and columns should be less than 6 and greater than 2");
            rowInputRef.current.value = 2;
            colInputRef.current.value = 2;
            return;
        }
        setRows(rowInputRef.current.value);
        setColumns(colInputRef.current.value);
        setGenerateMatrix(1);
        setValidSolution('');
        setValidSolutionCnt(0);
    }

  return (
    <div>
        <div className='flexContainer'>
            <div className='inputContainer'>
                <label className='inputs'>Rows</label>
                <input ref={rowInputRef} type='number'></input>
            </div>
            <div className='inputContainer'>
                <label className='inputs'>Columns</label>
                <input ref={colInputRef} type='number'></input>
            </div>
            <div className='inputContainer'>
                <button className='submit' onClick={setDimensions}>Generate Matrix</button>
            </div>
        </div>
    </div>
  )
}

export default GridInput