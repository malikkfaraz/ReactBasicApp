import React, {useState, Component, useReducer} from 'react';
import './App.css';
import Person from  './Person/Person'
import {UserInput} from './UserInput/UserInput'
import {UserOutput} from './UserInput/UserInput'

class App extends Component {

  state = {
    persons:[
      {name: "{your name}" , age:12},
      {name : "{your name}" , age:0}
    ],

    username:"superman"
  }
  
  handleMakeChange = (event) => {
    
    this.setState({
  
     username: event.target.value
  
    }
    )
  }

  

  switchNameHandler = (newname) => {
      console.log("clicked")
      this.setState({
    
        persons:[
          {name: newname , age:28},
           {name : "farazzzz" , age:24},
         {name:"eeeee", age:42}
     ]
    
       }
     )
   }


  changeHandler = (event) => {
    this.setState({
  
      persons:[
        {name: event.target.value , age:28},
         {name : event.target.value , age:Math.floor(Math.random()*40)}
       
   ]
  
     }
   )
 }






 render(){
   const style = {
     backgroundColor: 'blue',
     border : '1px blue',
     padding : '8px',
     width:'60%',
     cursor:'pointer'
   }

  

   
    return (
    <div className="App">
    <h1>Hiiiii..</h1> 
    
    {/* <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}
     click={this.switchNameHandler.bind(this,'hellooo')}/> */}
    <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}
    change={this.changeHandler}/> 
    {/* <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}/> */}

    <button style={style} onClick={ () => {this.switchNameHandler('shah')}} >Submit</button>
      <hr/>
    
    
    
    
    <UserInput username={this.state.username} makechange={this.handleMakeChange}/>
    <UserOutput username={this.state.username}/>
    


        </div>  
          );
        }
      }
    

    

export default App;


