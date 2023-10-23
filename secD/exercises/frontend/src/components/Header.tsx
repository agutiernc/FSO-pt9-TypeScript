// Notice the "name" property name in this interface. It's the same as the
// -- prop name that you gave in App.tsx

interface HeaderProps {
  name: string;
}

const Header = (props: HeaderProps) => {
  return <h1>{props.name.toUpperCase()}</h1>;
};

export default Header;