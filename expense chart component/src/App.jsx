
import chartLogo from "./assets/images/logo.svg"
import { Bars } from "./components/bars";

function App() {
 const data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 75.48
  }
];
let highest = 0
let totals =0;
data.filter((b)=>{
  totals= totals  + b.amount;
  if(b.amount>highest)highest=b.amount;
})


  return <>
   <div className="chart-container">
    <div className="chart-header">

      <div className="chart-header-text">
      <p>My balance</p>
         <h1>$645</h1>
      </div>
      <div className="chart-header-logo">
       <img  src={chartLogo}/>
      </div>
    </div>
    <div className="chart-content">

      <div className="chart-content-heading"><h1>Spending - Last Seven Days</h1></div>
      <div className="chart-content-bars">
        {
          data.map((dat,index)=>{
           return <Bars
            key={index}
            amount={dat.amount}
            day={dat.day}
            totals={totals}
            highest={highest}
            />

          })
        }
      </div>
      <hr />
      <div className="chart-content-totals">
        <div className="monthy">
          <p>Total this month</p>
          <h1>${totals}</h1>
        </div>
        <div className="percentage">
          <h1>+2.1%</h1>
          <p>from last month</p>
        </div>
      </div>
    </div>
   </div>
  </>;
}

export default App;
// My balance
// $921.48

// Spending - Last 7 days

// mon
// tue
// wed
// thu
// fri
// sat
// sun

// Total this month
// $478.33

// +2.4%
// from last month
