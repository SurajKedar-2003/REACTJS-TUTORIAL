import React from 'react';

function Day(){
    const d = new Date().getDay();
    let newStyle = {};
    let day = ""
    if(d === 1){
        day = "Monday";
        newStyle.color = 'blue';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(d===2){
        day = "tuesday";
        newStyle.color = 'red';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(d===4){
        day = "Thursday";
        newStyle.color = 'aqua';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(d===5){
        day = "friday";
        newStyle.color = 'aqua';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(d===6){
        day = "Saturday";
        newStyle.color = 'aqua';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }
    else{
        day = "Sunday day";
        newStyle.color = 'orange';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';

    }

    return(
        <>
            <h2 style={newStyle} >Day: {day}</h2>
        </>
    )
}

export default Day;