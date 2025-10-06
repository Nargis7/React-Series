import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact' 
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App



    // <div>
{/* <Navbar /> */}
      {/* <div className='container'> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} /> */}
        {/* </Routes> */}
         {/* </div> */}
    // </div>
