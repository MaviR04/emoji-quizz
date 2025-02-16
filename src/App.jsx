import { useState } from 'react'
import './App.css'
import './components/questionbox'
import QuestionBox from './components/questionbox'

function App() {
  return(
    <div className=' flex justify-center'>
      <QuestionBox />
    </div>
  )
}

export default App
