import React,{useContext} from 'react'
import ColEnd from './ColEnd';
import SolutionCol from './SolutionCol';

import { DimensionContext } from './Main';
import '../Stylesheets/styles.css'

function SolutionRow(props) {
    const [rows,setRows,columns,setColumns] = useContext(DimensionContext);
    const rowMatrix = [];

    for(let i = 0;i<columns;i++){
      if(props.r === rows-1 && i === columns-1){
        rowMatrix.push(<ColEnd r={props.r} c={i} key={i}></ColEnd>)
      }
      else
        rowMatrix.push(<SolutionCol r={props.r} c={i} key={i}></SolutionCol>);
    }
  return (
    <div className='row'>{rowMatrix}</div>
  )
}

export default SolutionRow