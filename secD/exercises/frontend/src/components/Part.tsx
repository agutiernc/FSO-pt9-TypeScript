import { CoursePart } from '../types';

interface PartProps {
  coursePart: CoursePart;
}

const Part = (props: PartProps) => {
  switch(props.coursePart.kind) {
    case "basic":
      return (
        <p>
          <strong>{props.coursePart.name} - {props.coursePart.exerciseCount}</strong>
          <br />
          <em>{props.coursePart.description}</em>
        </p>
      );
    case "group":
      return (
        <p>
          <strong>{props.coursePart.name} - {props.coursePart.exerciseCount}</strong>
          <br />
          Project exercises: {props.coursePart.groupProjectCount}
        </p>
      );
    case "background":
      return (
        <p>
          <strong>{props.coursePart.name} - {props.coursePart.exerciseCount}</strong>
          <br />
          <em>{props.coursePart.description}</em>
          <br />
          Submit to: {props.coursePart.backgroundMaterial}
        </p>
      );
    case "special":
      return (
        <p>
          <strong>{props.coursePart.name} - {props.coursePart.exerciseCount}</strong>
          <br />
          <em>{props.coursePart.description}</em>
          <br />
          Required Skills: {props.coursePart.requirements.join(', ')}
        </p>
      );
    default:
      return null;
  }
};

export default Part;