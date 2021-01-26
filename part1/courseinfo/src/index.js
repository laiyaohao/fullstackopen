import React, { useState }from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  // the thing inside the curly brackets that is used as input to this function
  // has to be a legit parameter in JSX of the App function
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>
      {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
      {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
      {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Content = (props) => {
  /*
  the following way also works (defining the function in this Content function):
  UPDATE: BUT NOT RECOMMENDED, BECAUSE IT SERVES NO PURPOSE, AND MAKES DEBUGGING HARD
  const Part1 = (props) => {
    return (
      <div>
        <p>
          {props.part1} {props.exercises1}
        </p>
      </div>
    )
  }
  ...
  */
  return (
    <div>
      <Part1 part1 = {props.parts[0].name} exercises1 = {props.parts[0].exercises}/>
      <Part2 part2 = {props.parts[1].name} exercises2 = {props.parts[1].exercises}/>
      <Part3 part3 = {props.parts[2].name} exercises3 = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  
  return (
  <div>
    <Header course = {course.name}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
  </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)