import { useEffect, useState } from "react";
import CanvasCircle from "./Circles";
import getUniqueID from "../../utils/uniqueID";
import './daysLeftVisual.css'

function DaysLeftVisual(props) {
  const tempShifts = props.total_shifts - props.shifts_left;
  const [array, setArray] = useState([]);
  const [shifts_worked, set_shifts_worked] = useState(tempShifts);
  const [totalShifts, setTotalShifts] = useState(props.total_shifts);

   
  const addToArray = bool => {
    setArray(prevArr => [...prevArr, bool]);
    
  };


  const buildArr = () => {
    for(let i = 0; i < totalShifts; i++) {
      if (i < shifts_worked)
        addToArray(true);
      else
        addToArray(false);  
    }
  } 

  useEffect(() => {
    buildArr();
  }, []);


  return (
    <div className="daysLeft-Container">
    
      {array.map(bool => {
        console.log(bool);
        return (
          <CanvasCircle key={getUniqueID()} is_filled={bool}/>
        )}
      )}
    </div>
  );
}


export default DaysLeftVisual;