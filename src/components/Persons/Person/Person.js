import React, {Component} from 'react';
import styles from './Person.module.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputEl.focus();   old way
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  static contextType =  AuthContext;
  
  render () {
    console.log('[Person.js] rendering...');
    return (
        <Aux>
          {/* <AuthContext.Consumer>
            {
              (context)=> context.authenticated ? <p>Authenticated</p> : <p>Pelase Login</p>
            }
          </AuthContext.Consumer>   old way using context */  }  
            {this.context.authenticated ? <p>Authenticated</p> : <p>Pelase Login</p>}
            <p key="i1" onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old</p>
            <p key="i2">{this.props.children}</p>
            {/* <input key="i3" ref={(inputEl) => {this.inputEl = inputEl}} text="text" onChange={this.props.changed} value={this.props.name}/>  /// input ref old way */}
            <input key="i3" ref={this.inputElementRef} text="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux> 
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, styles.Person);
