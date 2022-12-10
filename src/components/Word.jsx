import React from 'react'

export const Word=({word,correctLetters})=> {
   console.log('word:',word)

  return (
    <div>
      { word.split('').map((letter,i)=><span className="letter-holder" key={i}>
            {correctLetters.includes(letter) ? letter : '\u00a0'}
          </span>)}
    </div>
  )
}
