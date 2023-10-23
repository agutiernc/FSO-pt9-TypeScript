import axios from 'axios'
import { DiaryEntry, NewEntry } from '../types';

const baseUrl = 'http://localhost:3001/api';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>
}

export const getAllDiaryEntries = async () => {
  const { data } = await axios.get<DiaryEntry[]>(
    `${baseUrl}/diaries`
  );

  return data;
};


// refactored this code to async..await. look below

// export const createEntry = (obj: NewEntry) => {
//   return axios
//           .post<DiaryEntry>(`${baseUrl}/diaries`, obj)
//           .then(response => response.data)
// };


// refactored this code to add a type guard for axios. look below

// export const createEntry = async (obj: NewEntry) => {
//   const response = await axios.post<DiaryEntry>(`${baseUrl}/diaries`, obj);

//   return response.data;
// };


export const createEntry = async (obj: NewEntry) => {
  try {
    const response = await axios.post<DiaryEntry>(`${baseUrl}/diaries`, obj);

    return { data: response.data, error: null };
  } catch (error: unknown) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return { data: null, error: error.response?.data }
    } else {
      console.error(error);
      return { data: null, error: 'An error occurred' }
    }
  }
};