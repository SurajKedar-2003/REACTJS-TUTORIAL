import React from 'react';

function Clock(){
    const d = new Date().toLocaleDateString();
    const t = new Date().toLocaleTimeString();
    const h = new Date().getHours();
    var greet = "";
//learn about internal css
    let newStyle = {}
    if(h>=12 && h<=15){
        greet = "Good Afternoon";
        newStyle.color = 'red';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(h>=16 && h<=19){
        greet = "good Evening";
        newStyle.color = 'blue';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else if(h>20 && h<=24){
        greet = "Good night";
        newStyle.color = 'pink';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }else{
        greet = "good morning";
        newStyle.color = 'green';
        newStyle.fontSize = '30px';
        newStyle.fontStyle = 'italic';
        newStyle.fontWeight = 'bold';
    }
    return(
        <>
            <div style={{'border': '2px solid red', 'margin': 'auto', 'textAlign':'center', 'marginTop':'150px'}}>
                <h2>Date: {d}</h2>
                <p>Time: {t}</p>
                <p>Hours: {h}</p>
                <h3>Hello Students,<span style={newStyle}> {greet}</span></h3>
            </div>
        </>
    )
}
export default Clock;