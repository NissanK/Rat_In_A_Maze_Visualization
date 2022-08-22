import React,{useState,useEffect} from 'react' 
import GridInput from './GridInput';
import QuestionMatrix from './QuestionMatrix';
import SolutionMatrix from './SolutionMatrix';

export const DimensionContext = React.createContext();
export const MatrixValues = React.createContext();
export const GenerateContext = React.createContext();
export const FindSolutionsContext = React.createContext();
export const SolutionsContext = React.createContext();
export const PositionSolutionContext = React.createContext();
export const InputDisplayContext = React.createContext();

function Main() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [matrixValues ,setMatrixValues] = useState([]);
  const [generateMatrix,setGenerateMatrix] = useState(0);
  const [findSolutions,setFindSolutions] = useState(0);
  const [validSolution,setValidSolution] = useState("");
  const [validSolutionCnt,setValidSolutionCnt] = useState(0);
  const [positionSolutionX,setPositionSolutionX] = useState([0]);
  const [positionSolutionY,setPositionSolutionY] = useState([0]);
  const [inputDisplay,setInputDisplay] = useState(1);

  useEffect(() => {
    if(generateMatrix){
      let newMatrix = [...matrixValues];
      newMatrix = [];
      // if(generateMatrix){
      //   setMatrixValues([]);
      // };
      // setGenerateMatrix(0);
      for(let i = 0;i<rows;i++){
        const r = [];
        for(let j = 0;j<columns;j++){
          r.push({key : j,valid : 1});
        }
        newMatrix.push({key : i,row : r});
      }
      setMatrixValues(newMatrix);
    }
    setGenerateMatrix(0);
    setInputDisplay(1);
  }, [generateMatrix])

  useEffect(()=>{
    if(findSolutions){
      setValidSolution("");
      setValidSolutionCnt(0);
      findRatInAMaze();
    }
    setFindSolutions(0);
  },[findSolutions])

  let ans = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function dfs(x,y,current_path,visited){
    if(x<0 || y< 0 || x>=rows || y>=columns || matrixValues[x].row[y].valid === 0 || visited[x][y] === 1){
      return;
    }

    if(x === rows-1 && y === columns-1){
      ans.push(current_path);
    }

    visited[x][y] = 1;
    dfs(x-1,y,current_path + 'U',visited);
    dfs(x+1,y,current_path + 'D',visited);
    dfs(x,y-1,current_path + 'L',visited);
    dfs(x,y+1,current_path + 'R',visited);
    visited[x][y] = 0;
  }

  function findRatInAMaze(){
    let visited = [];

    for(let i = 0;i<rows;i++){
      let visitedRow = [];
      for(let j= 0;j<columns;j++){
        visitedRow.push(0);
      }
      visited.push(visitedRow);
    }

    dfs(0,0,"",visited);
    const newValid = ans[getRandomInt(0,ans.length-1)];

    setValidSolutionCnt(ans.length);
    setValidSolution(newValid);

    let newPositionX = [...positionSolutionX];
    let newPositionY = [...positionSolutionY];

    newPositionX = [0];
    newPositionY = [0];

    if(newPositionX.length === 1 && newPositionY.length === 1){
      let n = newValid.length;
      let x = 0;
      let y = 0;
      for(let i = 0;i<n;i++){
        if(newValid[i] === 'R') y = y + 1;
        else if(newValid[i] === 'L') y = y-1;
        else if(newValid[i] === 'U') x = x -1;
        else x = x + 1;
        newPositionX.push(x);
        newPositionY.push(y);
      }
      setPositionSolutionX(newPositionX);
      setPositionSolutionY(newPositionY);
    }

    // console.log(newPositionX,newPositionY);
  }

  return (
    <div>
      <GenerateContext.Provider value = {[generateMatrix,setGenerateMatrix]}>
        <DimensionContext.Provider value={[rows,setRows,columns,setColumns]}>

          <SolutionsContext.Provider value={[validSolution,setValidSolution,validSolutionCnt,setValidSolutionCnt]}>
            <GridInput></GridInput>
          </SolutionsContext.Provider>

          <MatrixValues.Provider value = {[matrixValues,setMatrixValues]}>

            <FindSolutionsContext.Provider value={[findSolutions,setFindSolutions]}>

              <InputDisplayContext.Provider value={[inputDisplay,setInputDisplay]}>
                {(rows && inputDisplay) && <QuestionMatrix></QuestionMatrix>}
              </InputDisplayContext.Provider>

              <SolutionsContext.Provider value={[validSolution,setValidSolution,validSolutionCnt,setValidSolutionCnt]}>
                <PositionSolutionContext.Provider value = {[positionSolutionX,setPositionSolutionX,positionSolutionY,setPositionSolutionY]}>
                  {validSolutionCnt && <SolutionMatrix></SolutionMatrix>}
                </PositionSolutionContext.Provider>
              </SolutionsContext.Provider>

            </FindSolutionsContext.Provider>

          </MatrixValues.Provider>

        </DimensionContext.Provider>
      </GenerateContext.Provider>
    </div>
  );
}

export default Main;