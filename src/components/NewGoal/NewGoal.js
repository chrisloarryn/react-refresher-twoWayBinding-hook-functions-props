import React from 'react'

// Css classes
import './NewGoal.css'
const NewGoal = props => {
  const addGoalHandler = (event) => {
    event.preventDefault()
    const newGoal = {
        id: Math.random().toString(),
        text: 'My new goal'
    }
    console.log(newGoal)
    props.onAddGoal(newGoal)
  }

  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' />
      <button type='submit'>Add Goal</button>
    </form>
  )
}

export default NewGoal
