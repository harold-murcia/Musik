import './styles/App.css'
import Score from './Score';
import GameBoard from './GameBoard';
import { useEffect, useState } from 'react';
import Piano from './Piano';
import Scale from "./Scales.json";

function App() {
  const [noteClicked, setNoteClicked] = useState(0)
  const [noteShowed, setNoteShowed] = useState(Scale[0]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    console.log('useEffect - noteClicked, noteShowed', noteClicked, noteShowed.id)
    if (noteClicked === noteShowed.id) {
      setPoints(points + 1)
      setNoteShowed(Scale[Math.floor(Math.random() * Scale.length)]);
    }
  }, [noteClicked, noteShowed]);

  return (
    <>
      {/* <NavBar setNotesArray={setNotesArray}/> */}
      <GameBoard note={noteShowed} />
      <Score points={points} />
      <Piano className='piano' notePlayed={setNoteClicked} />
    </>
  )
}

export default App