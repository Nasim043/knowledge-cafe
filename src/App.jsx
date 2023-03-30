import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import SideInfo from './components/SideInfo'

function App() {
  const [spentTime, setSpentTime] = useState(0);
  const handleSpentTime = (newTime) => {
    setSpentTime((prevTime) => prevTime + newTime)
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row'>
        <Blogs handleSpentTime={handleSpentTime} />
        <SideInfo spentTime={spentTime}/>
      </div>
    </div>
  )
}

export default App
