import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import './index.css'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./Home/Dashboard"; 
import LandingPage from "./InterviewPrep/LandingPage";
import InterviewPrep from "./InterviewPrep/InterviewPrep";


// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/interviewprep/:sessionId' element={<InterviewPrep />} />

        </Routes>
      </Router>

      <Toaster 
      position='top-center'
      style={{  
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0.01em',
        textAlign: 'center',
        textTransform: 'none',
      }}  
      toastOptions={{
        success: {
          theme: {
            primary: '#4f46e5',
            secondary: '#4f46e5',
          },
        },
        error: {
          theme: {
            primary: '#ef4444',
            secondary: '#ef4444',
          },
        },
      }}
      />
    </div>
  )
}

export default App
