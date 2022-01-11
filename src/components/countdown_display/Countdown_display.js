import './Countdown_display.css';

function Countdown_display(props) {
  return (
    <div className='child-container-1-CD'>
      <div>
        <div className='text-bold small-text'>You have <span style= {{color:"red"}}>{props.days_till} </span> days until your internship!</div>
      </div>
    </div>
  )
}

export default Countdown_display;