import './Shifts_left.css';

function Shifts_left(props) {
  
  return (
    <div className='child-container-1-CD padding-bottom'>
      <div className='text-bold small-text'>You have <span style= {{color:"red"}}>{props.days_left} </span> shifts left at Amazon!</div>
    </div>
  )
}

export default Shifts_left;