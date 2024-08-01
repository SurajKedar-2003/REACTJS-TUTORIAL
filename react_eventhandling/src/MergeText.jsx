import React from "react";

function MergeText(){
    let fname, lname;
    function txtHandler1(event){
        fname = event.target.value;
        console.log(fname);
    }
    function txtHandler2(event){
        lname = event.target.value;
        console.log(lname);
    }
    function mergeTxt(){
        console.log(fname+" "+lname);
    }
    return(
        <>
        <div>First Name: <input type="text" name="fname" id="fname" onChange={txtHandler1} /></div>
        <div>Last Name: <input type="text" name="lname" id="lname" onChange={txtHandler2} /></div>
        <button className="btn btn-success" onClick={mergeTxt}>Merge</button>
        
        </>
    )
}

export default MergeText;