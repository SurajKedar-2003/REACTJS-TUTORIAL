import React from 'react';

function City(){
    let city = ['nagpur', 'amravati', 'pune', 'mumbai'];
    return(
        <>{
            /**By using map function */
            city.map((e)=>{
                return(
                    <ul>
                        <li><h3>{e}</h3></li>
                    </ul>
                    
                )
            })

            /**By using foreach loop function */
           
 }</>
    )
}

export default City;