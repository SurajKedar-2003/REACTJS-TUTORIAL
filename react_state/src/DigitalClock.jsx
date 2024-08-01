import React, { useState } from 'react'

function DigitalClock() {
    var time = new Date().toLocaleTimeString();
    const[ctime, setCtime] = useState(time);

    function updateTime(){
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);
  return (
    <>
        <h1>DigitalClock :</h1>
        <h3>Current Time: {ctime}</h3>

    </>
  )
}

export default DigitalClock