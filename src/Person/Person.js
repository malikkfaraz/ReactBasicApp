import React from "react"
import './Person.css'

const person = (props) => {
    return(
    <div className="Person">
        <h1 onClick={props.click}>This is {props.name} and he is {props.age} years old</h1>
        <h2>{props.children}</h2>
        <input onChange={props.change}  type="text" value={props.name}></input>
    </div>)
}

export default person

