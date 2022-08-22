import React,{useContext} from 'react'

import { DimensionContext } from './Main';
import '../Stylesheets/styles.css'
import Col from './Col';
import ColSt from './ColSt';
import ColEnd from './ColEnd';

function Row(props) {
    const dimensionsArray = useContext(DimensionContext);
    const rows = dimensionsArray[0];
    const columns = dimensionsArray[2];
    
    const rowMatrix = [];

    for(let i = 0;i<columns;i++){
      if(props.r === 0 && i === 0){
        rowMatrix.push(<ColSt r={props.r} c={i} key={i}></ColSt>)
      }
      else if(props.r === rows-1 && i === columns-1){
        rowMatrix.push(<ColEnd r={props.r} c={i} key={i}></ColEnd>)
      }
      else
        rowMatrix.push(<Col r={props.r} c={i} key={i}></Col>);
    }
  return (
    <div className='row'>{rowMatrix}</div>
  )
}

export default Row