import { useState, useEffect } from "react";
import { DiaryEntry } from "./types";
import { getAllDiaryEntries } from "./services/diaryService";

import DiaryEntries from "./components/DiaryEntries";
import EntryForm from "./components/EntryForm";

const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaryEntries().then(data => setDiaryEntries(data));
  }, []);

  const updateDiaryEntries = (newEntry: DiaryEntry[]) => {
    setDiaryEntries(diaryEntries.concat(newEntry));
  };

  // the h1 has {} because of the apostrophe in Ilari's

  return (
    <div>
      <h1>{`Ilari's Flight Diaries`}</h1>
      <hr />
      <EntryForm updateDiaryEntries={updateDiaryEntries} />
      <hr />
      <DiaryEntries diaries={diaryEntries} />
    </div>
  )
}

export default App;