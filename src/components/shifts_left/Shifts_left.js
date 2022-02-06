import './Shifts_left.css';

function Shifts_left(props) {

  if(props.has_work) {
    return (
      <div className='child-container-1-CD padding-bottom'>
        <div className='text-bold small-text'>After today's shift, <br/>you have <span style= {{color:"red"}}>{props.days_left - 1} </span> shifts left at Amazon!</div>
      </div>
    )
  } 
  else {
    return (
      <div className='child-container-1-CD padding-bottom'>
        <div className='text-bold small-text'>You have <span style= {{color:"red"}}>{props.days_left} </span> shifts left at Amazon!</div>
      </div>
    )
  }
}

export default Shifts_left;

  
// return (
//   <div className='child-container-1-CD padding-bottom'>
//     <div className='text-bold small-text'>You have <span style= {{color:"red"}}>{props.days_left} </span> shifts left at Amazon!</div>
//   </div>