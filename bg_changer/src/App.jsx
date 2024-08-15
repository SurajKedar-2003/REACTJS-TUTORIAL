import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-pink-100")


  return (
    <div className={`w-screen h-screen ${color}`}>
      <div className=" fixed mx-[200px] mt-[500px] w-[1000px] h-12 px-4 py-4 bg-gray-300 flex justify-around items-center gap-2 rounded-lg">
            <button className="bg-red-600 px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-red-600")}>Red</button>
            <button className="bg-green-900 px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-green-900")}>Green</button>
            <button className="bg-blue-800 px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-blue-800")}>Blue</button>
            <button className="bg-[olive] px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-[olive]")}>Olive</button>
            <button className="bg-[gray] px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-[gray]")}>Grey</button>
            <button className="bg-yellow-400 px-4 py-1 rounded-md font-semibold"onClick={()=> setColor("bg-yellow-400")}>Yellow</button>
            <button className="bg-pink-500 px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-pink-500")}>Pink</button>
            <button className="bg-purple-800 px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-purple-800")}>Purple</button>
            <button className="bg-gray-400 px-4 py-1 rounded-md font-semibold" onClick={()=>setColor("bg-gray-400")}>Lavendar</button>
            <button className="bg-white px-4 py-1 rounded-md font-semibold" onClick={()=>setColor("bg-white")}>white</button>
            <button className="bg-black px-4 py-1 rounded-md text-white font-semibold" onClick={()=> setColor("bg-black")}>Black</button>
        </div>
    </div>
  )
}

export default App
