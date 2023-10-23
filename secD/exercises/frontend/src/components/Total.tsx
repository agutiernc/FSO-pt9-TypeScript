// Notice the "count" property name. It's the same as the prop name
// -- that you gave in App.tsx

interface TotalProps {
  count: {
    exerciseCount: number;
  }[];
}

const Total = (props: TotalProps) => {
  return (
    <>
      <p>
        Number of exercises{" "}:
        {props.count.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  )
}

export default Total;