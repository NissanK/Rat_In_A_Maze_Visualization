import React,{useContext} from 'react'
import SolutionRow from './SolutionRow';
import { DimensionContext, FindSolutionsContext, SolutionsContext} from './Main';

function SolutionMatrix() {

    const dimensionsArray = useContext(DimensionContext);
    const rows = dimensionsArray[0];
    const columns = dimensionsArray[2];

    const findSolutionsArray = useContext(FindSolutionsContext);
    const setFindSolutions = findSolutionsArray[1];

    const solutionsArray = useContext(SolutionsContext);
    const validSolutionCnt = solutionsArray[2];

    let matrix = [];
    for(let i = 0;i<rows;i++){
        matrix.push(<SolutionRow r={i} key={i}></SolutionRow>);
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
            <div className='flexContainer flexDirectionCol'>
                <button className='submit' onClick={() => setFindSolutions(1)}>Find Another Solution</button>
                <div className='validSolutionCnt'>
                    There are {validSolutionCnt} number of Unique Solutions!
                </div>
            </div>
        </div>
    </div>
  )
}

export default SolutionMatrix