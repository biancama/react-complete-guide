import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let persons = null;
    let btnClass= '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map ((p, index) => {
            return <ErrorBoundary key={p.id}>
              <Person name={p.name} age={p.age} click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangeHandler(event, p.id)}/> 
              </ErrorBoundary>
          })}
        </div>
      );
      btnClass = styles.Red;
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    } 
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    } 

    return (
      <div className={styles.App}>
        <h1>Hi my name is Massimo </h1>
        <p className={classes.join(' ')}> this is really working !!!</p>
        <button onClick={this.togglePersonshandler} className={btnClass}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
