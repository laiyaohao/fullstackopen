import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => {
  return (<h1>{text}</h1>)
  
}

const VoteButton = ({handleClick}) => {
  return (
    <button onClick = {handleClick}>
      vote
    </button>
  )
}

const NextButton = ({handleClick}) => {
  return (
    <button onClick = {handleClick}>
      next anecdote
    </button>
  )
}

const ButtonLayout1 = ({func1, func2}) => {
  return (
    <div>
        <VoteButton handleClick = {func1}/>
        <NextButton handleClick = {func2}/>
    </div>
  )
}

const Anecdote = ({anecdote,numVotes}) => {
  return (
    <div>
      <div>{anecdote}</div>
      <div>has {numVotes} votes</div>
    </div>
  )
}

const points = new Array(6).fill(0)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const number = Math.floor(Math.random()*6)
  const copy = [...points]
  const indexMax = points.indexOf(Math.max(...points))
  return (
    <div>
      <Heading text = 'Anecdote of the day'/>
      <Anecdote anecdote = {props.anecdotes[selected]} numVotes = {copy[selected]}/>
      <ButtonLayout1 func1 = {() => {points[selected] += 1}} func2 = {() => {setSelected(number)}}/>
      <Heading text = 'Anecdote with most votes'/>
      <Anecdote anecdote = {props.anecdotes[indexMax]} numVotes = {copy[indexMax]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)