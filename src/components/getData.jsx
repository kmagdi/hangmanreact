import axios from 'axios';
//const url="http://localhost/REACT_PHP_MYSQL/react_php_mysql_Hangman/server/"
//const url="https://hangmanphp.herokuapp.com/"
const url="https://hangmanphp.000webhostapp.com/hangman/"

export const getRandomWord= async ()=>{
    const response = await axios.get(url+'randomWord.php')
    console.log(response)
    return response
}
