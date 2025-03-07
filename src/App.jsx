import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AirVent } from 'lucide-react'
import Header from './components/header/Header'
import Controls from './components/controls/Controls'
import BottomInfoBar from './components/bottom-info-bar/BottomInfoBar'

function App() {

  return (
    <>
      <div className='dark:bg-cyan-950 dark:text-indigo-50 bg-blue-100 text-cyan-950 font-sans main-bg'>

        <Header />

        <div className="flex items-center justify-center w-full h-[70vh]">
          <Controls />
        </div>

        <BottomInfoBar />

      </div>
    </>
  )
}

export default App
