import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id: 'sasda', name: 'Massimo', age: 48 },
      { id: 'dsds', name: 'Yusuf', age: 35 },
      {id: 'sahfhdfsda',  name: 'Pippo', age: 25 },
    ], 
    otherState: 'other state',
    showPersons: false
  }

  nameChangeHandler = (event, id) =>  {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  }
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons : persons}); 
}

  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }
  render () {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map ((p, index) => {
            return <Person key={p.id} name={p.name} age={p.age} click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangeHandler(event, p.id)}/> 
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi my name is Massimo </h1>
        <button onClick={this.togglePersonshandler} style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
