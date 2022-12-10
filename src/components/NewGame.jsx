import React from 'react'

import {Button} from 'reactstrap'

export const NewGame=({setGameOver})=> {

  return (
    <div className="m-2">
      <Button onClick={()=>setGameOver(true)}>New Game</Button>
    </div>
  )
}
