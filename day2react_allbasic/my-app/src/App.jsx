import React from 'react'
import { useState } from 'react'
import { PostComponent } from './post';


function App() {

  const[post,setPosts]=useState([]);
  const postComponents=post.map(post=><PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
  />)

  function check()
  {
    setPosts([...post,{
      name:"sarthak",
      subtitle:"full stack developer",
      time:"3pm",
      image:"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=",
      description:"this done here only"
    }])
  }

  return (
    <div style={{backgroundColor:'#dfe6e9',height:"100vh"}}>
      <button onClick={check}>add post here</button>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div>
            {postComponents}
          </div>

        </div>
    </div>
  )
}

export default App
