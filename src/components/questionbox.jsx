import { useState, useEffect } from 'react'
import '../App.css'
import movies from '../movies.json' 


function QuestionBox(){
    const[index, setIndex] = useState(0)
    const[AnswerShown,setAnswer] = useState({opacity:0})

    const updateShown = ()=>{
        setAnswer({opacity:1})
    }

    const addIndex = ()=>{
        if(index<=18)
        {
            setIndex(index+1)
            setAnswer({opacity:0})
        }
    }

    const redIndex = ()=>{
        if(index>=1){
            setIndex(index-1)
            setAnswer({opacity:0})
        }
        else{
            console.log("no further fiend")
        }
    }

    return(
        <div>
            <div className=' sm:text-4xl text-4xl text-wrap text-white font-poppins font-semibold sm:w-2xl w-full text-center p-5 mb-8'> Guess the Movie by the Emojis</div>
            <div className=" text-5xl  sm:text-7xl sm:w-2xl w-full text-center bg-indigo-500 rounded-t-xl p-9">
                {movies[index].emojis}
            </div>
            <div className="text-4xl text-wrap sm:text-5xl sm:w-2xl w-full text-center bg-gray-50 rounded-b-xl p-9 font-bold text-black font-Inter">
                <div style={AnswerShown}>{movies[index].name}</div>
            </div>
            <div className=' flex justify-center sm:gap-20 gap-10 p-2 font-poppins mt-4 sm:flex-row flex-col '>
                <button type="button" onClick={redIndex} className='bg-white transition-all duration-500 text-black p-2 rounded-2xl font-semibold  hover:bg-black hover:text-white'>Previous</button>
                <button type="button" onClick={updateShown} className='bg-white transition-all duration-500 text-black p-2 rounded-2xl font-semibold  hover:bg-black hover:text-white'>Show Answer</button>
                <button type="button" onClick={addIndex} className='bg-white transition-all duration-500 text-black p-2 rounded-2xl font-semibold hover:bg-black hover:text-white'>Next</button>
            </div>
        </div>
    )
}

export default QuestionBox