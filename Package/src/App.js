import React, {Component} from 'react';
import './App.css';
import Person from './person';

class App extends Component{
  state = {
    student : [
      {name : "Simran", rollNo : 25 },
      {name : "Deval", rollNo : 36 },
      {name : "jack", rollNo : 89 },
    ]
  }
  onchangeHandler = () => {
    this.setState({
      student : [
        {name : "Simran", rollNo : 25 },
        {name : "Deval", rollNo : 102 },
        {name : "Khushi", rollNo : 89 },
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      student : [
        {name : "Simran", rollNo : 25 },
        {name : "Deval", rollNo : 102 },
        {name : event.target.value, rollNo : 89 },
      ] 
    })
  }

  render(){
    return (  
      <div>
        <Person name = {this.state.student[0].name} 
                no = {this.state.student[0].rollNo}/>
        <Person name = {this.state.student[1].name} 
                no = {this.state.student[1].rollNo}
                click = {this.onchangeHandler}/>
        <Person name = {this.state.student[2].name} 
                no = {this.state.student[2].rollNo}/>
        <input type = "text" onChange = {this.nameChangeHandler}/> <br/>
        <button onClick = {this.onchangeHandler}> Press </button>
      </div>
      );
  }
  
}

export default App;
