export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}


// removed optional since used operator "in" since the "in" test requires the field
// -- referring to the "in" in util.ts => toNewDiaryEntry function

// update (9/17/23) - added back the optional due to the front end was not working
//   when adding a new entry
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

// this is a type alias -- ommits the "comment" property from DiaryEntry
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;



// ============ Before => Enum section ================

// replaced with an "enum"
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

// export type Visibility = 'great' | 'good' | 'ok' | 'poor';

// export interface DiaryEntry {
//   id: number;
//   date: string;
//   weather: Weather;
//   visibility: Visibility;
//   comment?: string; // added to show this is optional
// }

// // this is a type alias -- ommits the "comment" property from DiaryEntry
// export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;