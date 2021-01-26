import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({buttonName, handleClick}) => {
  return (
    <button onClick = {handleClick}>
      {buttonName}
    </button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.altogether === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
      <Statistic text = {props.textG} value ={props.valueG}/>
      <Statistic text = {props.textN} value ={props.valueN}/>
      <Statistic text = {props.textB} value ={props.valueB}/>
      <Statistic text = {props.textAll} value ={props.valueAll}/>
      <Statistic text = {props.textAv} value ={props.valueAv}/>
      <Statistic text = {props.textP} value ={props.valueP}/>
      </table>
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const altogether = good + neutral + bad

  return (
    <div>
      <Heading text = 'give feedback'/>
      <Button buttonName = 'good' handleClick = {() => setGood(good+1)}/>
      <Button buttonName = 'neutral' handleClick = {() => setNeutral(neutral+1)}/>
      <Button buttonName = 'bad' handleClick = {() => setBad(bad+1)}/>
      <Heading text = 'statistics'/>
      <Statistics 
      textG = 'good' 
      valueG = {good} 
      textN = 'neutral' 
      valueN = {neutral} 
      textB = 'bad' 
      valueB = {bad}
      textAll = 'all'
      valueAll = {altogether}
      textAv = 'average'
      valueAv = {(good - bad) / altogether}
      textP = 'positive'
      valueP = {(good / altogether * 100) + ' %'}
      altogether = {altogether}
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)