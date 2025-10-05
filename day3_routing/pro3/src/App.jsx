import React from 'react'
import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
        <Route path='/neet/class11' element={<Class11Program/>}></Route>
        <Route path='/neet/class12' element={<Class12Program/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
function Layout()
{
  return(
    <div>
      <nav style={{backgroundColor:'red',height:'100vh'}}>
          <Link to="/neet/class11">Class 11 Program Here</Link> |{" "}
          <Link to="/neet/class12">Class 12 Program Here</Link> |{" "}
          <Link to="/">This is Landing Page of Website Here</Link>
        </nav>
        <div style={{}}>
      <Outlet></Outlet>
      </div>
      footer 
    </div>
  )

}
function ErrorPage()
{
  return (
    <div>
      this erroe page here 
    </div>
  )
}
function Landing()
{
  return(
    <div>
      this neet landing page here 
    </div>
  )
}

function Class12Program()
{
  const navigate=useNavigate();

    function redirectUser()
    {
      navigate('/')
    }

  return(
    <div>
      this is class 12 net classes
      <button onClick={redirectUser}>get back to landing page here </button>
    </div>
  )
}
function Class11Program()
{
  return(
    <div>
      neet program class 11
    </div>
  )
}

export default App
