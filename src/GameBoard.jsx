import { useEffect, useState } from "react";
import abcjs from "abcjs";
import 'abcjs/abcjs-audio.css';

function GameBoard({note}) {

  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    var abcString = `X:1\n${note.note}|]`;
    abcjs.renderAbc("svg-container", abcString, { responsive: 'resize' });
    const svg = document.getElementsByTagName('svg')[0];
    svg?.setAttribute('viewBox', '0 0 100 100');
  }, [note])

  return (
    <>
      <div className="content">
        <div id="svg-container"></div>
        <div className="button-container">
          <button onClick={() => setShowNote(!showNote)}>Show</button>
        </div>
        {showNote ? <h1>{note.note} - {note.syllabic}</h1> : ''}
      </div>
    </>
  )
}

export default GameBoard
