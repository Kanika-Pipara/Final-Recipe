import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import Signup from './Components/Signup';
import { useEffect, useState } from 'react';
import { auth } from './Components/Config';
import ForgotPassword from './Components/ForgotPassword';
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";




function App() {
  

  const [user,setUser]=useState();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        console.log(user.uid)
        setUser(user);
      }
      else{
        setUser()
      }
    })
   
  },)

  return (
    <>
      <BrowserRouter>
      <NavBar user={user} />

      <Routes>

        <Route path='/login'     element={<Login/>}/>

        <Route path='/signup'     element={<Signup/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>

 

        </Routes>

      </BrowserRouter>
      <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    </>

  )
}
export default App;
