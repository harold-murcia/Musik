import './styles/App.css'
import Score from './Score';
import GameBoard from './GameBoard';
import { useEffect, useState } from 'react';
import Piano from './Piano';
import Scale from "./Scales.json";
import OptionsPanel from './OptionsPanel';

function App() {
  const [noteClicked, setNoteClicked] = useState(0)
  const [noteShowed, setNoteShowed] = useState(Scale[0]);
  const [points, setPoints] = useState(0);
  const [amountOfScales, setAmountOfScales] = useState(1);

  useEffect(() => {
    console.log('useEffect - noteClicked, noteShowed', noteClicked, noteShowed.id)
    if (noteClicked === noteShowed.id) {
      setPoints(points + 1)
      setNoteShowed(Scale[Math.floor(Math.random() * (7 * amountOfScales))]);
    }
  }, [noteClicked, noteShowed]);

  const restartCount = () => {
    setPoints(0);
  }

  return (
    <>
      <OptionsPanel restartCount={restartCount} setAmountOfScales={setAmountOfScales}/>
      {/* <NavBar setNotesArray={setNotesArray}/> */}
      <GameBoard note={noteShowed} />
      <Score points={points} />
      <Piano amountOfScales={amountOfScales} className='piano' notePlayed={setNoteClicked} />
    </>
  )
}

export default App