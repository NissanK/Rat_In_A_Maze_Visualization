import React,{useEffect,useRef, useContext} from 'react'
import '../Stylesheets/styles.css';
import {DimensionContext, GenerateContext, NoAnswerContext, SolutionsContext} from './Main'

function GridInput() {
    const dimensionArray = useContext(DimensionContext);
    const setRows = dimensionArray[1];
    const setColumns = dimensionArray[3];

    const generateArray = useContext(GenerateContext);
    const setGenerateMatrix = generateArray[1];
    
    const solutionsArray = useContext(SolutionsContext);
    const setValidSolution = solutionsArray[1];
    const setValidSolutionCnt = solutionsArray[3];

    const setNoAnswer = useContext(NoAnswerContext)[1];

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
        setNoAnswer(0);
    }

  return (
    <div>
        <div className='flexContainer flexSpaceAround'>
            <div className='RowCol flexSpaceAround'>
                <div className='inputContainer'>
                    <label className='inputs'>Rows</label>
                    <input ref={rowInputRef} type='number'></input>
                </div>
                <div className='inputContainer'>
                    <label className='inputs'>Columns</label>
                    <input ref={colInputRef} type='number'></input>
                </div>
            </div>
            <div className='generateMatrixContainer'>
                <button className='submit' onClick={setDimensions}>Generate Matrix</button>
            </div>
        </div>
    </div>
  )
}

export default GridInput