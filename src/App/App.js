import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Manatee from '../components/Manatee/Manatee'
import Narwhal from '../components/Narwhal/Narwhal'
import Whale from '../components/Whale/Whale'

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammasls</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
                 </li>
                      <li>
              <Link to="/narwhal">Narwhal</Link>
                           </li>
                                <li>
              <Link to="/whale">Whale</Link>
                                     </li>
                                <li>
              <Link to="/whale/beluga">Beluga Whale</Link>
                           </li>
                       <li>
              <Link to="/whale/blue">Blue Whale</Link>
                 </li>
            </ul>
        </nav>
        <Routes>
        <Route path="/manatee" element={<Manatee/>}></Route>
        <Route path="/narwhal" element={<Narwhal/>}></Route>
        <Route exact path="/whale" element={<Whale/>}></Route>
        <Route path="/whale/:type" element={<Whale/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

