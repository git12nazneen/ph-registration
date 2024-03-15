
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
 

  return (
    <>
     <h1 className='text-center py-5 bg-slate-800 text-white font-bold'>Course Registration</h1>
    <div className='grid grid-cols-12 my-10'>
    <div className='col-span-10'>
    <Courses></Courses>
    
    </div>
    <div className='col-span-2'>
    <Cart></Cart>
    </div>
    </div>
    </>
  )
}

export default App
