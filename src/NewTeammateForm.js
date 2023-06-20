import { useState } from "react";

function NewTeammateForm (props) {

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [character, setCharacter] = useState('');
  const [verbose, setVerbose] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const teammate = {
      name,
      title,
      character,
      verbose,
      temperature
    }

    props.onSave(teammate);

    // Reset the form
    setName('');
    setTitle('');
    setCharacter('');
    setVerbose('');
    setTemperature('');
  };

  return(
    <>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>

    <label for="title">Title:</label>
    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>

    <label for="verbose">Verbose:</label>
    <input type="range" id="verbose" name="verbose" min="0" max="5" step="1" value={verbose} onChange={(e) => setVerbose(e.target.value)}></input>

    <label for="temperature">Temperature:</label>
    <input type="range" id="temperature" name="temperature" min="0" max="5" step="1" value={temperature} onChange={(e) => setTemperature(e.target.value)}></input>

    <label for="character">Persona Description:</label>
    <textarea id="character" name="character" value={character} onChange={(e) => setCharacter(e.target.value)}></textarea>

    <button type="submit" value="Submit" onClick={handleSubmit}>Save</button>
  </form>
    </>
  )
}



export default NewTeammateForm