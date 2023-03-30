
// import './App.css';
// import React, {useState, useEffect} from 'react'


// const NEWS_YEARS_EVE= new Date(2023,3,30);


// const getTimedelta=()=>{
//   const now=new Date();
//   console.log(now)
//   const timedelta= NEWS_YEARS_EVE.getTime()-now.getTime();

//   //diff in days
//   const days=Math.floor(timedelta / (24 * 60 * 60 * 1000));

//   //diff in hours
//   const hours=Math.floor((timedelta % (24 * 60 * 60 * 1000))/(60*60*1000))

//   //diff in minutes
//   const minutes=Math.floor((timedelta % (60*60*1000)) /(60*1000))

//   //diff in seconds
//   const seconds=Math.floor((timedelta % (60 * 1000))/1000);

  


//   return{
//     days,
//     hours,
//     minutes,
//     seconds
//   };
// };






// function App() {

// const [counDown, setCounDown] = useState();
// const[loading, setLoading]=useState(true);
// const[isNewYear, setIsNewYear]=useState(false);

// useEffect(()=>{
//   const interval=setInterval(()=>{
//     const timedelta=getTimedelta();

//     setCounDown(timedelta);
//     setLoading(false)

//     if(timedelta.seconds<0){
//       setIsNewYear(true)
//     }
//   }, 2000);

//   return ()=> clearInterval(interval)
// });

// if(loading){
//   return <h1>Loading...</h1>
// }

// if(isNewYear){
//   return <h1>Happy New Year 2024</h1>
// }

//   return (
//     <div className="container">

//       <div className="flex">
//         <span className="font-big">{counDown.days}</span>
//         <span className="font-small">DAYS</span>
//       </div>
      
//       <div className="flex">
//         <span className="font-big">{counDown.hours}</span>
//         <span className="font-small">HOURS</span>
//       </div>

//       <div className="flex">
//         <span className="font-big">{counDown.minutes}</span>
//         <span className="font-small">MINUTES</span>
//       </div>

//       <div className="flex">
//         <span className="font-big">{counDown.seconds}</span>
//         <span className="font-small">SECONDS</span>
//       </div>
//     </div>
//   );
// }

// export default App;
























// // import './App.css';
// // import React, {useState, useEffect} from 'react'


// // const NEWS_YEARS_EVE= new Date(2024,11,31);


// // const getTimedelta=()=>{
// //   const now=new Date();
// //   const timedelta= NEWS_YEARS_EVE.getTime()-now.getTime();

// //   //diff in days
// //   const days=Math.floor(timedelta / (24 * 60 * 60 * 1000));

// //   //diff in hours
// //   const hours=Math.floor((timedelta % (24 * 60 * 60 * 1000))/(60*60*1000))

// //   //diff in minutes
// //   const minutes=Math.floor((timedelta % (60*60*1000)) /(60*1000))

// //   //diff in seconds
// //   const seconds=Math.floor((timedelta % (60 * 1000))/1000);

  


// //   return{
// //     days,
// //     hours,
// //     minutes,
// //     seconds
// //   };
// // };






// // function App() {

// // const [counDown, setCounDown] = useState();
// // const[loading, setLoading]=useState(true);
// // const[isNewYear, setIsNewYear]=useState(false);

// // useEffect(()=>{
// //   const interval=setInterval(()=>{
// //     const timedelta=getTimedelta();

// //     setCounDown(timedelta);
// //     setLoading(false)

// //     if(timedelta.seconds<0){
// //       setIsNewYear(true)
// //     }
// //   }, 2000);

// //   return ()=> clearInterval(interval)
// // });

// // if(loading){
// //   return <h1>Loading...</h1>
// // }

// // if(isNewYear){
// //   return <h1>Happy New Year 2024</h1>
// // }

// //   return (
// //     <div className="container">

// //       <div className="flex">
// //         <span className="font-big">{counDown.days}</span>
// //         <span className="font-small">DAYS</span>
// //       </div>
      
// //       <div className="flex">
// //         <span className="font-big">{counDown.hours}</span>
// //         <span className="font-small">HOURS</span>
// //       </div>

// //       <div className="flex">
// //         <span className="font-big">{counDown.minutes}</span>
// //         <span className="font-small">MINUTES</span>
// //       </div>

// //       <div className="flex">
// //         <span className="font-big">{counDown.seconds}</span>
// //         <span className="font-small">SECONDS</span>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;






import React from 'react'
import Timer from './components/timer'

export default function App() {
  return (
    <div>
     
    </div>
  )
}



