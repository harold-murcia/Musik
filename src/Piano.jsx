import { useEffect, useState } from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';


const scale = {
  start: MidiNumbers.fromNote('c3'),
  end: MidiNumbers.fromNote('b3')
}

function MyPiano({ amountOfScales, notePlayed }) {
  const [noteRange, setNoteRange] = useState({ first: scale.start, last: scale.end });

  const handleClick = (midiNumber, reset = false) => {
    if (reset) notePlayed()
    else notePlayed(midiNumber)
  }

  useEffect(() => {
    setNoteRange({ first: scale.start, last: scale.end + 12 * (amountOfScales - 1) })
  }, [amountOfScales])

  return (
    <div className="piano">
      <Piano
        noteRange={noteRange}
        playNote={(e) => handleClick(e - 48, false)}
        stopNote={(e) => handleClick(e - 48, true)}
        width={1000}
      />
    </div>
  );
}

export default MyPiano;