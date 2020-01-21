import React, { useState } from 'react';

export default function IncState(){
    let [counter, useCounter] = useState(0);

    function Inc(){
        useCounter(counter + 1)
    }

    return(
        <>
        <h1>Contator : { counter }</h1>
        <button onClick={Inc}>Incrementar...</button>
        </>
    )
}