import React, { useState } from 'react'

// Css classes
import './NewGoal.css'
const NewGoal = props => {
  // let enteredText = ''
  const [enteredText, setEnteredText] = useState('')

  const addGoalHandler = event => {
    event.preventDefault()
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    }
    console.log(newGoal)
    setEnteredText('')
    if (!newGoal.text) return
    props.onAddGoal(newGoal)
  }

  const textChangeHandler = event => {
    // console.log(event);
    setEnteredText(event.target.value)
  }

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' value={enteredText} onChange={textChangeHandler} />
      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default NewGoal
