import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import SideInfo from './components/SideInfo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog';

function App() {
  const [spentTime, setSpentTime] = useState(0);
  const [bookmarked, setBookmMarked] = useState([]);

  const handleSpentTime = (newTime) => {
    setSpentTime((prevTime) => prevTime + newTime)
  }
  const handleBookMark = (newBookMark) => {
    const isExist = bookmarked.includes(newBookMark);
    if (isExist) {
      toast("You Have Already Bookmarked This Blog");
    }
    setBookmMarked([...bookmarked, newBookMark])
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row px-1 md:px-2'>
        <Blogs handleSpentTime={handleSpentTime} handleBookMark={handleBookMark} />
        <SideInfo spentTime={spentTime} bookmarked={bookmarked} />
      </div>
      <ToastContainer />
      <Blog />
    </div>
  )
}

export default App
