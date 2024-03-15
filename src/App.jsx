
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

export const totalCredits = 15

function App() {

  const [cart, setCart] = useState([])

 const handleFunction = (course) =>{
  console.log('handleFunction', course);

  const credits = cart.reduce((acc, curr) => acc + curr.credit, 0)
  if(credits+course.credit > totalCredits)
  return alert(`only ${totalCredits} credits`)

  const alreadyExits = cart.find(c=>c.id ==course.id)
  if(!alreadyExits)setCart( c => [...c, course])
 }

  return (
    <>
     <h1 className='text-center py-5 bg-slate-800 text-white font-bold'>Course Registration</h1>
    <div className='grid grid-cols-12 my-10'>
    <div className='col-span-10'>
    <Courses handleFunction={handleFunction}></Courses>
    
    </div>
    <div className='col-span-2'>
    <Cart cart={cart}></Cart>
    </div>
    </div>
    </>
  )
}

export default App
