import axios from 'axios';
//const url="http://localhost/react_php_mysql_Hangman/server/"
const url="https://hangmanphp.herokuapp.com/"


export const getRandomWord= async ()=>{
    const response = await axios.get(url+'randomWord.php')
    const data=await response;
    console.log(data)
    return data
}
