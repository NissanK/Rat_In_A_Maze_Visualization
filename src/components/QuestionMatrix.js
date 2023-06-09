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
        let width = window.innerWidth;
        if(width < 750 && width>=600) return rows*4;
        else if(width < 600) return rows*3;
        return rows * 5;
    }
    function width(){
        let width = window.innerWidth;
        if(width < 750 && width>=600) return columns*4;
        else if(width < 600) return columns*3;
        return columns * 5;
    }
    const dimenstionStyling = {
        height: `${height()}em`,
        width: `${width()}em`
    }
  return (
    <div className='flexContainer'>
        <div className='flexSpaceAround '>
            <div className='matrixContainer'>
                <div className='matrix' style={dimenstionStyling}>
                    {matrix}
                </div>
            </div>
            <div className='flexContainer flexDirectionCol width45'>
                <div className='generalText'>
                    Click on the <span className='inherit' style={{color : "lightgreen"}}>Green</span> Squares to toggle them <span className='inherit' style={{color : "rgb(241, 120, 120)"}}>Red</span> and vice-versa
                </div>
                <button className='submit marginTop' onClick={() => {setFindSolutions(1);setInputDisplay(0)}}>Find Solutions</button>
            </div>
        </div>
    </div>
  )
}

export default QuestionMatrix