import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPages from '../pages/LoginPages';

const AppRoute = () => {
  return (
    <Router basename="/ThePageOfUs">
        <Routes>
            <Route path='/' element={<LoginPages/>}/>
            {/* you can add here more rotes */}
             {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
    </Router>
  )
}

export default AppRoute