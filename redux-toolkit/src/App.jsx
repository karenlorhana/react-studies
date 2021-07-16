import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from './redux/counter'
import './App.css'

export default function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h1> The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
      <button onClick={() => dispatch(decrementByAmount(33))}>
        Decrement by 33
      </button>
    </div>
  )
}
