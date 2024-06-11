import { useState } from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('b3');

function MyPiano({notePlayed}) {
  const [noteRange, setNoteRange] = useState({ first: firstNote, last: lastNote });

  const handleClick = (midiNumber, reset = false) => {
    if (reset) notePlayed()
    else notePlayed(midiNumber)
  }

  return (
    <div className="piano">
      <Piano
        noteRange={noteRange}
        playNote={(e) => handleClick(e-48, false)}
        stopNote={(e) => handleClick(e-48, true)}
        width={1000}
      />
    </div>
  );
}

export default MyPiano;