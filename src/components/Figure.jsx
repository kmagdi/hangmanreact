import React from 'react';

export const Figure=({wrongLetters})=>{
  return(
      <div>
          <svg className="figure-container ">
            {/*--akasztófa--*/}
            <line x1="140" x2="140" y1="20" y2="50" />
            <line x1="60" x2="140" y1="20" y2="20" />
            <line x1="60" x2="60" y1="20" y2="230" />
            <line x1="20" x2="100" y1="230" y2="230" />
            {/*--fej--1.hiba*/}
            {wrongLetters.length>0 && <circle  cx="140" cy="70" r="20"  />}
            {/*--test--2.hiba*/}
            {wrongLetters.length>1 && <line  x1="140"  x2="140" y1="90" y2="150" />}
            {/*--karok--3.hiba*/}
            {wrongLetters.length>2 && <line  x1="140" x2="120" y1="120" y2="100" />}
            {wrongLetters.length>3 && <line  x1="140" x2="160" y1="120" y2="100" />}
            {/*--bal láb--4.hiba*/}
            {wrongLetters.length>4 && <line  x1="140" x2="120" y1="150" y2="180" />}
            {/*--jobb láb--5.hiba*/}
            {wrongLetters.length>5 && <line  x1="140"  x2="160" y1="150" y2="180" />}
        </svg>
      </div>

  ) 
}
