import React from "react";
import ReactDOM from "react-dom/client";
import notes from "../notes"


function Card(props){
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

function Note(){
  return (
    <div>
    {notes.map((x) => {
        return (
          <Card
          key={x.id}
          title={x.title}
          content={x.content}
          />
        )
      })
    }
    </div>
  )
}

export default Note;
