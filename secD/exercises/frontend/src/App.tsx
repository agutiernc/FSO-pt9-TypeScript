import { courseParts } from './data/data';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const courseName = "Half Stack application development";

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total count={courseParts} />
    </div>
  );
};

export default App;



// ========= Before exercise 9.15 ==================

// import Header from './components/Header';
// import Content from './components/Content';
// import Total from './components/Total';

// // describes the shape of each array element --> (the object)
// interface CoursePart {
//   name: string;
//   exerciseCount: number;
// }

// const App = () => {
//   const courseName = "Half Stack application development";
//   const courseParts: CoursePart[] = [
//     {
//       name: "Fundamentals",
//       exerciseCount: 10
//     },
//     {
//       name: "Using props to pass data",
//       exerciseCount: 7
//     },
//     {
//       name: "Deeper type usage",
//       exerciseCount: 14
//     }
//   ];

//   return (
//     <div>
//       <Header name={courseName} />
//       <Content courseParts={courseParts} />
//       <Total count={courseParts} />
//     </div>
//   );
// };

// export default App;