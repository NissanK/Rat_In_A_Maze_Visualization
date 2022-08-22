import React,{useContext} from 'react'
import {DimensionContext, FindSolutionsContext, InputDisplayContext} from './Main';
import '../Stylesheets/styles.css'
import Row from './Row';

function QuestionMatrix() {

    const dimensionsArray = useContext(DimensionContext);
    const rows = dimensionsArray[0];
    const columns = dimensionsArray[2];

    const solutionsArray = useContext(FindSolutionsContext);
    const setFindSolutions = solutionsArray[1];

    const inputDisplayArray = useContext(InputDisplayContext);
    const setInputDisplay = inputDisplayArray[1];


    let matrix = [];
    for(let i = 0;i<rows;i++){
        matrix.push(<Row r={i} key={i}></Row>);
    }
    
    function height(){
        if(rows > 10 || columns > 10) return rows * 2.5;
        else if(rows> 6 || columns > 6) return rows * 3;
        return rows * 5;
    }
    function width(){
        if(rows > 10 || columns > 10) return columns * 2.5;
        else if(rows> 6 || columns > 6) return columns * 3;
        return columns * 5;
    }
    const dimenstionStyling = {
        height: `${height()}em`,
        width: `${width()}em`
    }
  return (
    <div className='flexContainer'>
        <div className='flexSpaceAround'>
            <div className='matrixContainer'>
                <div className='matrix' style={dimenstionStyling}>
                    {matrix}
                </div>
            </div>
            <button className='submit' onClick={() => {setFindSolutions(1);setInputDisplay(0)}}>Find Solutions</button>
        </div>
    </div>
  )
}

export default QuestionMatrix