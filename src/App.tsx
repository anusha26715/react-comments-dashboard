// import { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from './components/commentDashboard/dashboard'
import Profile from './components/profilePage/profile'
import Header from './components/header/header'
import { useState,useEffect } from 'react'
import type { User } from './interface/types'
import './App.scss'

function App() {

  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => setUserData(data[1])); 
  }, []);

  return (
    
    <BrowserRouter>
      <Header user={userData}/>
      <Routes>
        <Route path='/' element={<Navigate to="/dashboard" replace/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile user={userData}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
