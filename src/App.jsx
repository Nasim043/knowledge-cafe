import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import SideInfo from './components/SideInfo'

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
    <Header />
    <Blogs />
    <SideInfo />
    </div>
  )
}

export default App
