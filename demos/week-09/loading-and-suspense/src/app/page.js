export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>
        Welcome to the homepage. This site has a slow page and a fast page. The
        only difference between them is that the fast page wraps the slow
        loading server component that fetches data from a slow API in a
        `Suspense` component with a loading state.
      </p>
    </div>
  );
}
