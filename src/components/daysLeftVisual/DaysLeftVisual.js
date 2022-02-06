import { useEffect, useState } from "react";
import CanvasCircle from "./Circles";
import getUniqueID from "../../utils/uniqueID";
import './daysLeftVisual.css'

function DaysLeftVisual(props) {
  const tempShifts = props.total_shifts - props.shifts_left;
  const [array, setArray] = useState([]);
  const [shifts_worked, set_shifts_worked] = useState(tempShifts);
  const [totalShifts, setTotalShifts] = useState(props.total_shifts);

   
  const addToArray = color => {
    setArray(prevArr => [...prevArr, color]);
    
  };


  const buildArr = () => {
    if (props.has_work) {
      for(let i = 0; i < totalShifts; i++) {
        if (i < shifts_worked)
          addToArray("green");
        else if (i == shifts_worked) {
          addToArray("orange");
        }
        else
          addToArray("clear");  
      }
    }
    else {
      for(let i = 0; i < totalShifts; i++) {
        if (i < shifts_worked)
          addToArray("green");
        else
          addToArray("clear");  
      }
    }
  } 


  useEffect(() => {
    buildArr();
  }, []);


  return (
    <div className="daysLeft-Container">
      {array.map( str_color => {
        return (
          <CanvasCircle key={getUniqueID()} Acolor={str_color}/>
        )}
      )}
    </div>
  );
}


export default DaysLeftVisual;


// const buildArr = () => {
//   for(let i = 0; i < totalShifts; i++) {
//     if (i < shifts_worked - 1)
//       addToArray({isFilled: true, isGreen: true});
//     else if (i < shifts_worked) 
//       addToArray({isFilled: true, isGreen: false});
//     else
//       addToArray({isFilled: false, isGreen: null});  
//   }
// } 



// import { useEffect, useState } from "react";
// import CanvasCircle from "./Circles";
// import getUniqueID from "../../utils/uniqueID";
// import './daysLeftVisual.css'

// function DaysLeftVisual(props) {
//   const tempShifts = props.total_shifts - props.shifts_left;
//   const [array, setArray] = useState([]);
//   const [shifts_worked, set_shifts_worked] = useState(tempShifts);
//   const [totalShifts, setTotalShifts] = useState(props.total_shifts);

   
//   const addToArray = bool => {
//     setArray(prevArr => [...prevArr, bool]);
    
//   };


//   const buildArr = () => {
//     for(let i = 0; i < totalShifts; i++) {
//       if (i < shifts_worked)
//         addToArray(true);
//       else
//         addToArray(false);  
//     }
//   } 


//   useEffect(() => {
//     buildArr();
//   }, []);


//   return (
//     <div className="daysLeft-Container">
//       {array.map( bool => {
//         return (
//           <CanvasCircle key={getUniqueID()} is_filled={bool}/>
//         )}
//       )}
//     </div>
//   );
// }


// export default DaysLeftVisual;