import { useState } from "react";

function NewTeammateForm (props) {

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [persona, setPersona] = useState('');
  const [verbosity, setVerbosity] = useState('');
  const [creativity, setCreativity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const teammate = {
      name,
      title,
      persona,
      verbosity,
      creativity
    }

    props.onSave(teammate);

    // Reset the form
    setName('');
    setTitle('');
    setPersona('');
    setVerbosity('');
    setCreativity('');
  };

  return(
    <>
  <form id="new-teammate-form">
    <label for="name">Teammate Name</label>
    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>

    <label for="title">Job Title</label>
    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>

    <label for="verbosity">Verbosity</label>
    <input type="range" id="verbosity" name="verbosity" min="0" max="5" step="1" value={verbosity} onChange={(e) => setVerbosity(e.target.value)}></input>

    <label for="creativity">Creativity</label>
    <input type="range" id="creativity" name="creativity" min="0" max="5" step="1" value={creativity} onChange={(e) => setCreativity(e.target.value)}></input>

    <label for="persona">Persona Description</label>
    <textarea id="persona" name="persona" rows="3" value={persona} onChange={(e) => setPersona(e.target.value)}></textarea>

    <button type="submit" value="Submit" onClick={handleSubmit}>Save</button>
  </form>
    </>
  )
}



export default NewTeammateForm