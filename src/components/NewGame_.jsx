import React from 'react'
import { useMutation } from 'react-query'
import { getRandomWord } from './getData'
import {Button} from 'reactstrap'

export const NewGame=({setWord,setWrongLetters,setCorrectLetters})=> {

const mutationNewGame=useMutation(getRandomWord,{
            onSuccess:(data)=>{
                console.log(data.data)
                setWord(data.data[0].word)
                setCorrectLetters([])
                setWrongLetters([])
            }
        })
    
  return (
    <div className="m-2">
      <Button onClick={()=>mutationNewGame.mutate()}>New Game</Button>
    </div>
  )
}
