import { createContext } from 'react'
import AChild from './AChild'
const data = createContext();
const data1 = createContext();
function App() {
  const name = 'suraj'
  const age = 21

  return (
    <>
      <div className='container'>
        <data.Provider value={name}>
          <data1.Provider value={age}>
          <AChild></AChild>
          </data1.Provider>
        </data.Provider>
      </div>
      
    </>
  )
}
export {data, data1}
export default App