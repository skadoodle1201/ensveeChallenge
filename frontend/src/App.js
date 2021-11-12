import React from 'react'
import './App.css';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard';
import Header from './components/navbar';
import Home from './pages/home'
import Logout from './pages/logout'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>    
          <Route path="/login" element={<Login />} />
				  <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
			</Router>
    </div>
  )
}

export default App;
