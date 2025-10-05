import React from 'react'
import { useState } from 'react'

function App() {

  const [todos,setTodos]=useState([{
    title:"gym",
    description:"at 4pm",
    done:"true"
  }])

  function addTodos()
  {
    let newArr=[];
    for(let i=0;i<todos.length;i++)
    {
      newArr.push(todos[i]);
    }
    const val1=document.getElementById("text1") as HTMLInputElement;
    const val2=document.getElementById("text2") as HTMLInputElement;
    newArr.push({
      title:val1.value,
      description:val2.value,
      done:"not yet"
    });
    setTodos(newArr);
    console.log(newArr)
  }
  return (
    <div>
      <input type="text" id="text1" placeholder='title'/><br />
      <input type="text" id="text2" placeholder='description' /><br />
      <button onClick={addTodos}>ADD todos here only</button>

      <Todos title={todos[0].title} dexcription={todos[0].description} done={todos[0].done}></Todos>
 
    </div>
  )
  function Todos(props: any)
  {
      return (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.dexcription}</h2>
          <h3>{props.done}</h3>
        </div>
      )
  }
}

export default App



// import React from 'react'
// import { useState } from 'react'
// import "./App.css"

// function App() {
//   const [count,setCount]=useState(0);
//   function onClickHandler()
//   {
//     setCount(count+1)
//   }

//   return (
//     <div>
//       <Button onClickHandler={onClickHandler}></Button>
      
//     </div>
//   )
//   function Button(props: { onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined; })
//   {
//       return <button onClick={props.onClickHandler}>counter {count}</button>
//   }
// }

// export default App
