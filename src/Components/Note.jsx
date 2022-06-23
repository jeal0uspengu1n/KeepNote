import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} class="btn btn-outline-danger"><i class="fa fa-trash"></i></button>
    </div>
  );
}

export default Note;
