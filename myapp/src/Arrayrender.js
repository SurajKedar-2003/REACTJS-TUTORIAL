import React from 'react';

function Arrayrender(){
    const courses = ['mern', 'java', 'python', 'php', 'android', 'testing'];

    return(
        <>{
            courses.map((e)=>{
                if(e.length()>5){
                    return(
                        <p>{e}</p>
                    )
                }    
            })
        }
        </>
    )
}
export default Arrayrender;