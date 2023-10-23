import { CoursePart } from '../types';
import Part from './Part';

// describes the shape of the entire props object, including the array
// -- It needs to define courseParts as an array of CoursePart objects
// --- Hence it uses CoursePart[] notation to denote an array of that type
// -- it was modified because now, there are additional properties that some objects have

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {
        props.courseParts.map(c => (
          <div key={c.name}>
            <Part coursePart={c} />
          </div>
        ))
      }
    </>
  )
}

export default Content;



// ======== Before exercise 9.15 ================

// // describes the shape of the entire props object, including the array
// // -- It needs to define courseParts as an array of CoursePart objects
// // --- Hence it uses CoursePart[] notation to denote an array of that type

// interface ContentProps {
//   courseParts: {
//     name: string;
//     exerciseCount: number;
//   }[];
// }

// const Content = (props: ContentProps) => {
//   return (
//     <>
//       <p>
//         {props.courseParts[0].name}: {props.courseParts[0].exerciseCount}
//       </p>
//       <p>
//         {props.courseParts[1].name}: {props.courseParts[1].exerciseCount}
//       </p>
//       <p>
//         {props.courseParts[2].name}: {props.courseParts[2].exerciseCount}
//       </p>
//     </>
//   )
// }

// export default Content;