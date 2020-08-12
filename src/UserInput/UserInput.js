import React from "react"

const UserInput = (props) => {
    return(

    <div>
       
        <input className="UserInput" type="text" onChange={props.makechange} value={props.username} ></input>
    </div>
    )

}

const UserOutput = (props) => {
    return(
        <div>
            <h2>Username: {props.username}</h2>
            <p>Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.</p>
                <p> He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books. </p>


        </div>
    )
}
    


export  {UserInput}
export {UserOutput}