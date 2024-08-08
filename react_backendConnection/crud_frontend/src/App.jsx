import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Appcomp from './Appcomp'
import AddStudent from './AddStudent'
import EditComp from './EditComp'
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Appcomp></Appcomp>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/update/:id' element={<EditComp/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App