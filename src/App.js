// import React, { Component } from 'react';
import React, { useState } from 'react';
import  classes from  './App.module.css';
import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Naufil", age: "28"},
//       { name: "Yusuf", age: "29" }
//     ],
//     otherValue: "This is other value";
//   }

//   switchNamehandler = () => {
//     // Cant use below line
//     // this.state.persons[0].name = 'Ruqaiya';
//     this.setState( {
//       persons: [
//         { name: "Naufil Kharbe", age: "28"},
//         { name: "Yusuf Pathan", age: "29" }
//       ]
//     })
//   }

//   render () {
//     return (
//       <div className="App">
//         <h1>Hi I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={this.switchNamehandler}>Switch Button</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: racing</Person>
//       </div>
//     );
//   }
// }

// export default App;


const App = props => {
  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // };

  // const StyledButton = styled.button`
  //   background-color: ${props => props.alt ? 'red' : 'green'};
  //   color: white;
  //   font: inherit;
  //   border: 1px solid blue;
  //   padding: 8px;
  //   cursor: pointer;

  //   &:hover {
  //     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  //     color: black;
  //   }
  // `;

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id:"543", name: "Naufil", age: "28"},
      { id:"544", name: "Yusuf", age: "29" }
    ]
  });

  const [ OtherState, setOtherState ] = useState({
    otherValue: "This is other value"
  });

  const [ showPersonsState, setShowPersonsState ] = useState({
    showPersons: true
  });

  const switchNamehandler = (newName) => {
    setPersonsState( {
      persons: [
        { name: newName, age: "28"},
        { name: "Yusuf Pathan", age: "29" }
      ]
    })
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personsState.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [ ...personsState.persons ]
    persons[personIndex] = person;
    setPersonsState( { persons: persons });
  }

  const togglePersonsHandler = () => {
    const doesNotShowPersons = showPersonsState.showPersons;
    setShowPersonsState( {
      showPersons: !doesNotShowPersons
    })
  }

  const deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  }

  let persons = null ;
  let btnClass = '';
  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person
                  click={() => deletePersonHandler(index)}
                  name={person.name}
                  age ={person.age}
                  key ={person.id}
                  changed={(event) => nameChangedHandler(event, person.id)} />
        })}
          {/* click={() => switchNamehandler('NafNew')}
           */}
      </div>
    );
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (personsState.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    // <StyleRoot></StyleRoot>
      <div className={classes.App}>
        <h1>Hi I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <p>This is really working!</p>
        <StyledButton alt={personsState.persons} onClick={togglePersonsHandler}>
          Toggle Persons
        </StyledButton> */}
        {/* <button
          style={style}
          onClick={togglePersonsHandler}>Toggle</button> */}
          {persons}
      </div>

  );
};

// export default Radium(App);
export default App;
