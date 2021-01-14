import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    function expand() {
      setExpanded(true);
    }

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          }
        });
    }

    function submitNote(event) {
      props.onAdd(note);
      setNote({
          title: "",
        content: ""
        });
      event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/> : null}
        <textarea onClick={expand} name="content" placeholder="Take a note..." value={note.content} rows={isExpanded ? 3 : 1} onChange={handleChange}/>
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
