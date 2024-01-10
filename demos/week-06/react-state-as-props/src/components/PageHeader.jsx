export default function PageHeader({ count }) {
  return (
    <>
      <h1>State as props (and functions as props)</h1>
      <p>
        This is the same counter app we made before, but this time we have put
        the button in a component, and we are passing the state variable and
        event handler function as props
      </p>
      <p>The count is {count}</p>
    </>
  );
}
