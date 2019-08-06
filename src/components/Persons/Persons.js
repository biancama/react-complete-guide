import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);  
    //     return state;
    // }

    /** need if extends a component and not a Purecomponent 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState);  
        return nextProps.persons !== this.props.persons || 
        nextProps.click !== this.props.click ||
        nextProps.changed !== this.props.changed;
    }
*/
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);  
        return {message: 'Snapshot !!!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate'); 
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');  

    }

    render() {
        console.log('[Persons.js] rendering...');
        return (
        this.props.persons.map ((p, index) => {
            return <Person key={p.id} name={p.name} age={p.age} click={() => this.props.click(index)} changed={(event) => this.props.changed(event, p.id)} isAuth={this.props.isAuthenticated} /> 
            })
        );
    }
}

export default Persons;