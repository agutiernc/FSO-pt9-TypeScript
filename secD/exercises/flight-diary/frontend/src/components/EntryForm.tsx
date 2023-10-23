import { useState } from "react";
import { NewEntry, DiaryEntry } from "../types";
import { createEntry } from "../services/diaryService";

interface EntryFormProps {
  updateDiaryEntries: (newEntry: DiaryEntry[]) => void;
}

const initialState: NewEntry = {
  date: '',
  weather: '',
  visibility: '',
  comment: ''
}

const EntryForm = (props: EntryFormProps) => {
  const [formData, setFormData] = useState<NewEntry>(initialState);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await createEntry(formData);

      // added the if statement because of changes in the axios POST in diaryService.ts
      // -- otherwise [data] was getting the error

      // Update: 9/20/23 - since converting the text fields into radio buttons, this
      // -- error checking may not be needed any longer since the values are hard coded
      // --- in the form below
      
      if (error === null) {
        props.updateDiaryEntries([data]);
        setFormData(initialState);
      } else {
        const errorMessage = typeof error === 'string' ? error : 'An error occurred'; // Check if error is a string
        
        setErrorMsg(errorMessage.slice(21)); 
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  };
 
  return (
    <div>
      <h2>Add New Diary Entry</h2>

      {errorMsg !== '' && (
        <div style={{ color: 'red' }}>{errorMsg}</div>
      )}

      <br />

      <form onSubmit={handleSubmit}>
        <label> Date: 
          <input
            type="date"
            value={formData.date}
            name="date"
            onChange={handleChange}
          />
        </label>

        <br />

        <label>Visibility: </label>
        <input
          type="radio"
          value={'great'}
          checked={formData.visibility === 'great'}
          name="visibility"
          onChange={handleChange}
        />
        <label>great</label>

        <input
          type="radio"
          value={'good'}
          checked={formData.visibility === 'good'}
          name="visibility"
          onChange={handleChange}
        />
        <label>good</label>

        <input
          type="radio"
          value={'ok'}
          checked={formData.visibility === 'ok'}
          name="visibility"
          onChange={handleChange}
        />
        <label>ok</label>
        
        <input
          type="radio"
          value={'poor'}
          checked={formData.visibility === 'poor'}
          name="visibility"
          onChange={handleChange}
        />
        <label>poor</label>

        <br />

        <label>Weather: </label>
        <input
          type="radio"
          value={'sunny'}
          checked={formData.weather === 'sunny'}
          name="weather"
          onChange={handleChange}
        />
        <label>sunny</label>

        <input
          type="radio"
          value={'rainy'}
          checked={formData.weather === 'rainy'}
          name="weather"
          onChange={handleChange}
        />
        <label>rainy</label>

        <input
          type="radio"
          value={'cloudy'}
          checked={formData.weather === 'cloudy'}
          name="weather"
          onChange={handleChange}
        />
        <label>cloudy</label>

        <input
          type="radio"
          value={'stormy'}
          checked={formData.weather === 'stormy'}
          name="weather"
          onChange={handleChange}
        />
        <label>stormy</label>

        <input
          type="radio"
          value={'windy'}
          checked={formData.weather === 'windy'}
          name="weather"
          onChange={handleChange}
        />
        <label>windy</label>


        <br />
        <label> Comment:
          <input
            type="text"
            value={formData.comment}
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EntryForm;




// ========= Before pt 9-D: exercise 9.19 =======================

// import { useState } from "react";
// import { NewEntry, DiaryEntry } from "../types";
// import { createEntry } from "../services/diaryService";

// interface EntryFormProps {
//   updateDiaryEntries: (newEntry: DiaryEntry[]) => void;
// }

// const initialState: NewEntry = {
//   date: '',
//   weather: '',
//   visibility: '',
//   comment: ''
// }

// const EntryForm = (props: EntryFormProps) => {
//   const [formData, setFormData] = useState<NewEntry>(initialState);
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFormData(data => ({
//       ...data,
//       [name]: value
//     }));
//   };

//   // refacorted code to include type guard. look below

//   // const handleSubmit = async (e: React.SyntheticEvent) => {
//   //   e.preventDefault();

//   //   const response = await createEntry(formData);

//   //   props.updateDiaryEntries([response]);
//   //   setFormData(initialState);
//   // };

//   const handleSubmit = async (e: React.SyntheticEvent) => {
//     e.preventDefault();

//     try {
//       const { data, error } = await createEntry(formData);

//       // added the if statement because of changes in the axios POST in diaryService.ts
//       // -- otherwise [data] was getting the error
//       if (error === null) {
//         props.updateDiaryEntries([data]);
//         setFormData(initialState);
//       } else {
//         const errorMessage = typeof error === 'string' ? error : 'An error occurred'; // Check if error is a string
        
//         setErrorMsg(errorMessage.slice(21)); 
//       }
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.log(error.message)
//       }
//     }
//   };
 
//   return (
//     <div>
//       <h2>Add New Diary Entry</h2>

//       {errorMsg !== '' && (
//         <div style={{ color: 'red' }}>{errorMsg}</div>
//       )}

//       <br />

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={formData.date}
//           name="date"
//           placeholder="Date"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={formData.visibility}
//           name="visibility"
//           placeholder="Visibility"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={formData.weather}
//           name="weather"
//           placeholder="Weather"
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={formData.comment}
//           name="comment"
//           placeholder="Comment"
//           onChange={handleChange}
//         />
//         <br />

//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default EntryForm;