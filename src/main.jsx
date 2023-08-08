import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Agents from './pages/agents.jsx'
import Weapons from './pages/Weapons.jsx'
import Sprays from './pages/Sprays.jsx'
import Maps from './pages/Maps.jsx'
import Favorites from './pages/Favorites.jsx'
import PrintAgents from './components/PrintAgents.jsx'
import PrintInfoAgent from './components/PrintInfoAgent/PrintInfoAgent.jsx'
import PrintWeapons from './components/PrintWeapons.jsx'
import PrintInfoWeapon from './components/PrintInfoWeapon/PrintInfoWeapon.jsx'
import PrintMaps from './components/PrintMaps.jsx'
import PrintCardMaps from './components/PrintCardMaps/PrintCardMaps.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element={<App/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/agents" element={<Agents/>}>
            <Route index element={<PrintAgents/>}/>
            <Route path="/agents/:name" element={<PrintInfoAgent/>}/>
          </Route>
          <Route path="/maps" element={<Maps/>}>
            <Route index element={<PrintMaps/>}/>
            <Route path="/maps/:name" element={<PrintCardMaps/>}/>
          </Route>
          <Route path="/weapons" element={<Weapons/>}>
            <Route index element={<PrintWeapons/>}/>
            <Route path="/weapons/:name" element={<PrintInfoWeapon/>}/>
          </Route>
          <Route path="/sprays" element={<Sprays/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>


    </BrowserRouter>
  </React.StrictMode>,
)
