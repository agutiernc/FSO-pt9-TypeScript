import { useState, useEffect } from "react";
import { Note } from './types';
import { getAllNotes, createNote } from './services/noteService';

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
   getAllNotes().then(data => setNotes(data));
  }, []);

  const noteCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();

    createNote({ content: newNote }).then(data => setNotes(notes.concat(data)));
    
    setNewNote('');
  }

  return (
    <div>
      <form onSubmit={noteCreation}>
        <input
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
        />

        <button type="submit">add</button>
      </form>

      <ul>
        {notes.map(note => 
          <li key={note.id}>{note.content}</li>
        )}
      </ul>
    </div>
  );
};

export default App;


// =========  This was refactored above =================

// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { Note } from './types';


// const App = () => {
//   const [newNote, setNewNote] = useState('');
//   const [notes, setNotes] = useState<Note[]>([
//     { id: 1, content: 'testing' }
//   ]);

//   useEffect(() => {
//     axios.get<Note[]>('http://localhost:3001/notes')
//          .then(response => setNotes(response.data));
//   }, []);

//   const noteCreation = (event: React.SyntheticEvent) => {
//     event.preventDefault();

//     axios.post<Note>('http://localhost:3001/notes', { content: newNote })
//          .then(response => setNotes(notes.concat(response.data)))
    
//     setNewNote('');
//   }


//   return (
//     <div>
//       <form onSubmit={noteCreation}>
//         <input
//           value={newNote}
//           onChange={(event) => setNewNote(event.target.value)}
//         />

//         <button type="submit">add</button>
//       </form>

//       <ul>
//         {notes.map(note => 
//           <li key={note.id}>{note.content}</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;


// ======== Updated in 9D: Communicating w/the server =====================
// import { useState, useEffect } from "react";
// import axios from 'axios';

// interface Note {
//   id: number,
//   content: string
// }

// const App = () => {
//   const [newNote, setNewNote] = useState('');
//   // const [notes, setNotes] = useState([]); // old, but needs a type --- look below

//   const [notes, setNotes] = useState<Note[]>([
//     { id: 1, content: 'testing' }
//   ]);

//   useEffect(() => {
//     axios.get<Note[]>('http://localhost:3001/notes')
//          .then(response => setNotes(response.data));
//   }, []);

//   const noteCreation = (event: React.SyntheticEvent) => {
//     event.preventDefault();

//     const noteToAdd = {
//       content: newNote,
//       id: notes.length + 1
//     }

//     setNotes(notes.concat(noteToAdd));
//     setNewNote('');
//   }


//   return (
//     <div>
//       <form onSubmit={noteCreation}>
//         <input
//           value={newNote}
//           onChange={(event) => setNewNote(event.target.value)}
//         />

//         <button type="submit">add</button>
//       </form>

//       <ul>
//         {notes.map(note => 
//           <li key={note.id}>{note.content}</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;


// ======== Before 9D: Communicating with the server ===============


// import { useState } from "react";

// interface Note {
//   id: number,
//   content: string
// }

// const App = () => {
//   const [newNote, setNewNote] = useState('');
//   // const [notes, setNotes] = useState([]); // old, but needs a type --- look below

//   const [notes, setNotes] = useState<Note[]>([
//     { id: 1, content: 'testing' }
//   ]);

//   const noteCreation = (event: React.SyntheticEvent) => {
//     event.preventDefault();

//     const noteToAdd = {
//       content: newNote,
//       id: notes.length + 1
//     }

//     setNotes(notes.concat(noteToAdd));
//     setNewNote('');
//   }


//   return (
//     <div>
//       <form onSubmit={noteCreation}>
//         <input
//           value={newNote}
//           onChange={(event) => setNewNote(event.target.value)}
//         />

//         <button type="submit">add</button>
//       </form>

//       <ul>
//         {notes.map(note => 
//           <li key={note.id}>{note.content}</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default App;
