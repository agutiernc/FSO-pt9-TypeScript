import { DiaryEntry } from "../types";

interface DiaryProps {
  diaries: DiaryEntry[];
}

const DiaryEntries = (props: DiaryProps) => {
  return (
    <div>
      <h2>Diary Entries</h2>

      {props.diaries.map(d =>
        <div key={d.id}>
          <h3>{d.date}</h3>

          <div>
            <strong>Visibility:</strong> {d.visibility}
            <br />
            <strong>Weather:</strong> {d.weather}
          </div>
        </div>  
      )}
    </div>
  )
}

export default DiaryEntries;