
import './App.css';
import Countdown_display from "./components/countdown_display/Countdown_display";
import Shift_left from "./components/shifts_left/Shifts_left";
import DaysLeftVisual from './components/daysLeftVisual/DaysLeftVisual';
import daysBetween from './utils/daysBetweenUtility';


function App() {
  const start_amazon_date = new Date(2022, 0, 2);  //will only need for shifts display
  const end_amazon_date = new Date(2022, 4, 16);
  const internship_date = new Date(2022, 4, 23);
  const todays_date = new Date();
  const scheduled_days = [0, 1, 4, 5];
  let hasWork = false;

  if (scheduled_days.includes(todays_date.getDay() % 7)) {
    hasWork = true;
  }

  

  const shifts_between = (earlyDate, lateDate) => {
    let days_between_dates = daysBetween(lateDate, earlyDate);  
    let shifts = 0;
    
    for (let i = 0; i < days_between_dates; i++) {
      let tempDay = ((earlyDate.getDay()) + i) % 7;
      
      if (scheduled_days.includes(tempDay)) {
        shifts++;
      }
    }
    return shifts;
  }


  return (
    <div className="App">
      <div className='parent-container'>
        <div className="text-bold text-large padding-top">Countdown to Internship</div>
        <Countdown_display className="child-container-1-CD" days_till={daysBetween(internship_date, todays_date)}/>
        <Shift_left className="child-container-1-CD padding-bottom" 
                    days_left={shifts_between(todays_date, end_amazon_date)}
                    has_work={hasWork}/>
      </div>
      <div className='parent-container-2'> 
        <div className="text-bold text-large padding" >Shifts Left</div>
        <DaysLeftVisual className='days-left' 
                        shifts_left={shifts_between(todays_date, end_amazon_date)} 
                        total_shifts={shifts_between(start_amazon_date, end_amazon_date)} 
                        has_work={hasWork}/>
      </div>
    </div>
  );
}

export default App;
