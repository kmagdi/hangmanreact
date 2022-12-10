import React from 'react'
import {abc} from '../abc'
import {Button} from 'reactstrap'

export const Letters=({word,setWrongLetters,setCorrectLetters})=> {
    const checkLetter=(letter)=>{
    //console.log(letter)
   if(word.indexOf(letter.toLowerCase())==-1){
      console.log('rossz')
      setWrongLetters((prev)=>[...prev,letter.toLowerCase()])
    } else{
      setCorrectLetters((prev)=>[...prev,letter.toLowerCase()])
    }
  }
  return (
    <div className="text-center">
      {abc.map(letter=><Button className="m-1" key={letter} onClick={()=>checkLetter(letter)}>{letter}</Button>)}
    </div>
  )
}
