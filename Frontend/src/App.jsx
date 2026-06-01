import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Routes, Route,
  Link
} from 'react-router-dom';
import ListProject from './pages/Project/Listproject/Listproject'
import AddProject from './pages/Project/Addproject/Addproject'
import EditProject from './pages/Project/Editproject/EditProject'
import Viewproject from './pages/Viewproject/Viewproject'
import Contact from './pages/Contact/Contact'
import Adminpanel from './pages/AdminSide/Adminpanel/Adminpanel'
import Addabout from './pages/AdminSide/Addabout/Addabout'
import AddService from './pages/AdminSide/Services/Addservices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/ListProject" element={<ListProject />} />
          <Route path="/editproject/:id" element={<EditProject />} />

          <Route path="/viewProject/:id" element={<Viewproject />} />
          <Route path="/contact" element={<Contact />} />

          // Admin Side
          <Route path="/adminpaanel" element={<Adminpanel />} />
          <Route path="/addabout" element={<Addabout />} />

          <Route path="/addService" element={<AddService />} />

        </Routes>
      </Router >

    </>
  )
}

export default App
