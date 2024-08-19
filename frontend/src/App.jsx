import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Search/Search'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Router>
      <Navbar />
      <Main setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Card searchQuery={searchQuery} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App