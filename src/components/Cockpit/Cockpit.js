import React, {useEffect, useRef, useContext} from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => { 

  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  const toggleButtonRef = useRef(null);
   useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request ...
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud')
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] useEffect clean up');
      // clearTimeout(timer);
    }
   }, []);

   useEffect(() => {
    console.log('[Cockpit.js] useEffect 2 call');
    
    return () => {
      console.log('[Cockpit.js] useEffect clean up 2 call');
    }
   });


    let btnClass= '';
    const classes = [];
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2) {
      classes.push(styles.red);
    } 
    if (props.personsLength <= 1) {
      classes.push(styles.bold);
    } 
    return (
        <div className={styles.Cockpit}>
            <h1>Hi my name is {props.title} </h1>
            <p className={classes.join(' ')}> this is really working !!!</p>
            <button ref={toggleButtonRef} onClick={props.click} className={btnClass}>Toggle Persons</button>
            {/* <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>  old way to use context */}
            <button onClick={authContext.login}>Login</button>
        </div>
)};


export default React.memo(Cockpit);