import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainComponent from './components/MainComponent'
import Addbook from './components/Addbook'
import Editbookinfo from './components/Editbookinfo'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent/>}></Route>
        <Route path='/Addbook' element={<Addbook/>}></Route>
        <Route path = '/EditbookInfo/:id' element={<Editbookinfo/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
