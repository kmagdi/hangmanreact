
import { useState } from 'react';
import { useEffect } from 'react'
import {useQuery} from 'react-query'
import {getRandomWord} from './components/getData'

import './App.css';
import {Figure} from './components/Figure'
import {Letters} from './components/Letters'
import {Word} from './components/Word'
import {MyModal} from './components/MyModal'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [wrongLetters,setWrongLetters] =useState([])
  const [correctLetters,setCorrectLetters] =useState([])
  const [word,setWord]=useState('')
  const [gameOver,setGameOver] = useState(false);
  const {data,status}=useQuery(['word',gameOver],getRandomWord)
  const [modal, setModal] = useState(false);
  const [msg,setMsg] = useState({})

  //status=="success" && console.log(data.data[0].word) 
  useEffect(()=>{
    if(status=="success"){
      setWord(data.data[0].word)
      setGameOver(false)
    } 
  },[status,gameOver])
  useEffect(()=>{
    const uniqueLetters=[...new Set(word.slice(''))]
    const uniqueCorrectletters=[...new Set(correctLetters)]
    if(uniqueLetters.length==uniqueCorrectletters.length && correctLetters.length>0){
      setMsg({msg:`Gratulálok! 😍 Megoldottad: ${wrongLetters.length} -t hibáztál!`,title:word})
      init()
    }
    if(wrongLetters.length>=6){
      setMsg({msg:`Sajnálom! 😢 ez most nem sikerült!`,title:word})
      init()
    }
  },[word,correctLetters,wrongLetters])

  const init=() => {
    setModal(true)
    setGameOver(true)
    setCorrectLetters([])
    setWrongLetters([])
  }

  //console.log('app:',word)
//console.log('wrong:',wrongLetters)
//console.log('correct:',correctLetters)
  return (
    <div className="content">
        <h3 className="m-4">Hangman</h3>
        <Figure wrongLetters={wrongLetters}/>
        <Word word={word} correctLetters={correctLetters} />
        <Letters word={word} setCorrectLetters={setCorrectLetters} setWrongLetters={setWrongLetters}/>
        <div className="btn btn-secondary" onClick={()=>setGameOver(true)}>New Game</div>
        <MyModal word={word} modal={modal} setModal={setModal} msg={msg}/>
    </div>
  );
}

export default App;
