import React, { useEffect, useState } from 'react'

function Ass() {
  const [currentTab,setCurrentTab]=useState('feed');
  useEffect(function()
{
    console.log('backend call')
},[currentTab])


  return (
    <div>
      <button onClick={()=>setCurrentTab('feed')} style={{color:currentTab=='feed'?'red':'black'}}>Feed</button>
      <button onClick={()=>setCurrentTab('notification')} style={{color:currentTab=="notification"?'red':'black'}}>notification</button>
      <button onClick={()=>setCurrentTab('message')} style={{color:currentTab=='message'?'red':'black'}}>message</button>
      <button  onClick={()=>setCurrentTab('job')}style={{color:currentTab=='job'?'red':'black'}}>job</button>

    </div>
  )
}

export default Ass
