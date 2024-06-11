function NavBar({setNotesArray}) {

  const choices = [
    ["A", "B", "C", "D", "E", "F", "G"],
    ["A'", "B'", "C'", "D'", "E'", "F'", "G'"],
    ["A''", "B''", "C''", "D''", "E''", "F''", "G''"],
  ];

  return (
    <>
      <div className="nav-bar">
        <button onClick={() => setNotesArray(choices[0])}>0</button>
        <button onClick={() => setNotesArray(choices[0].concat(choices[1]))}>1</button>
        <button onClick={() => setNotesArray(choices[0].concat(choices[1]).concat(choices[2]))}>2</button>
      </div>
    </>
  )
}

export default NavBar
