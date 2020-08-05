import React from 'react';
import classes from './Person.module.css';
// import styled from 'styled-components';
// import Radium from 'radium';

const Person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //       width: '450px'
  //   }
  // };

  // const StyledDiv = styled.div`
  //   width: 60%;
  //   margin: 16px auto;
  //   border: 1px solid #eee;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;

  //   @media (min-width: 500px) {
  //     width: 450px;
  //   }
  // `;

  return (
    // <div className="Person" style={style}>
    // <StyledDiv>
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    // </StyledDiv>
    // </div>
  )
}

// export default Radium (Person);
export default Person;
