import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Massimo', age: 48 },
      { name: 'Yusuf', age: 35 },
      { name: 'Pippo', age: 25 },
    ], 
    otherState: 'other state'
  }
  switchNameHandler = (newName) => {
    //console.log('Was Clicked !!!');
    // DON'T DO THIS this.state.persons[0].name = 'Pippo';
    this.setState({persons: [
      { name: newName, age: 48 },
      { name: 'Yusuf', age: 35 },
      { name: 'Pippo', age: 27 },
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: event.target.value, age: 48 },
      { name: 'Peppa pig', age: 35 },
      { name: 'Sephanie', age: 27 },
    ]})
  }

  render () {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi my name is Massimo </h1>
        <button onClick={this.switchNameHandler.bind(this, 'Pippo')} style={style}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Pippo')} changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler('Pluto')}>My hobbies: football </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Paperino')}/>
      </div>
    );
  }
}

export default App;
