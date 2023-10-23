import ReactDOM from 'react-dom/client';

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
}

// could have written the above as:

// const Welcome = (props: WelcomeProps): JSX.Element => {
//   return <h1>Hello, {props.name}</h1>;
// }

// OR:

// const Welcome = ({ name }: { name: string }): JSX.Element => (
//   <h1>Hello, {name}</h1>
// );


ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement).render(
    <Welcome name="Bob" />
  );

