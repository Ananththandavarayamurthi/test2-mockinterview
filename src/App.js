import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
// import Photos from './compoy
import Home from './component/Home'
// import Reigister from './component/Reigister'
function App() {

  return (
    <div>
      
      <BrowserRouter>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/photos' element={<Photos />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/register' element={<Reigister />}/> */}
        
      </Routes>
      </BrowserRouter> 

    </div>
  )
}

export default App