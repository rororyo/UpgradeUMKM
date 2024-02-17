import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Feedback from './components/pages/Feedback'
import BizConnect from './components/pages/programs/BizConnect'
import BizGuide from './components/pages/programs/BizGuide'
import BizLive from './components/pages/programs/BizLive'
import BizTrack from './components/pages/programs/BizTrack'
import DigiMarket from './components/pages/programs/DigiMarket'
import SkillBoost from './components/pages/programs/SkillBoost'
const App = () => {
  return (
    <>
    
<Routes>
  {/* Public Route */}
  <Route path="/" element={<Home />} />
  <Route path="/feedback" element={<Feedback />} />
  {/* Private Route */}
<Route path="/biz-connect" element={<BizConnect />} />
<Route path="/biz-guide" element={<BizGuide />} />
<Route path="/biz-live" element={<BizLive />} />
<Route path="/biz-track" element={<BizTrack />} />
<Route path="/digi-market" element={<DigiMarket />} />
<Route path="/skill-boost" element={<SkillBoost />} />


{/* 404 Route */}
<Route path="*" element={<div>404</div>} />
</Routes>
    </>
  )
}

export default App