import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons : [
      { id: 'sasda', name: 'Massimo', age: 48 },
      { id: 'dsds', name: 'Yusuf', age: 35 },
      {id: 'sahfhdfsda',  name: 'Pippo', age: 25 },
    ], 
    otherState: 'other state',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  } 

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState);  
    return true;
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
  this.setState((prevState, props) => { return {persons : persons, changedCounter: prevState.changedCounter + 1}}); /// updating the state whe depends by old state
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

  loginHandler= () => {
    this.setState({authenticated: true});
  }
  render () {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = 
        <div>
          <Persons persons={this.state.persons} click={this.deletePersonHandler}  changed={this.nameChangeHandler} isAuthenticated={this.state.authenticated}/>
        </div>;
    }
    
    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (
            <Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} showPersons={this.state.showPersons} click={this.togglePersonshandler} />
            ) : null}
          
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }

  /* componentWillMount() {
    console.log('[App.js] component will mount');

   } */

  componentDidMount() {
    console.log('[App.js] component did mount');
  }
}

export default withClass(App, styles.App);
