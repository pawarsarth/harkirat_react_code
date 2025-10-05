import React, { useState } from 'react'

function App() {
  const [visible,setVisible]=useState(false);


  return (
    <div>
            <button onClick={()=>setVisible(!visible)}>toogle button</button>    
            {visible && <p>welcome this visble here</p>}
    </div>
  )
}

export default App












// import React, { useState } from 'react'

// function App() {
//   return (
//     <div>
//       welcome sarthak here
//    <Counter/>
//     </div>
//   )
// }

// function Counter ()
// {
//   const [count,setCount]=useState(0);
//   setInterval(() => {
//     setCount(count+1)
//   }, 1000);
//   // function increaseCounter()
//   // {
//   //     setCount(count+1);
//   // }
//   // function decreaseCount()
//   // {
//   //   setCount(count-1);
//   // }
//   // function reset()
//   // {
//   //   setCount(0)
//   // }
//   return (
//     <div>
//       <div>{count}</div>
//       {/* <button onClick={increaseCounter}>increase counter</button>
//       <button onClick={decreaseCount}>decrease counter</button>
//       <button onClick={reset}>reset</button> */}
//     </div>
//   )
// }

// export default App
