import { useParams, Outlet, Link } from "react-router-dom";

export default function UserPage() {
  // useParams returns an object. Here we are destructuring the username property from it
  const { username } = useParams();

  // here we might make a fetch request to our database and go and get information about our user

  return (
    <div>
      <h2>User Page</h2>
      <nav>
        <Link to={`/users/${username}/posts`}>posts</Link>
        <Link to={`/users/${username}/likes`}>likes</Link>
      </nav>
      <p>{username} is pottentially the most handsome human being ever</p>
      <Outlet />
    </div>
  );
}
