export default function App() {
  // here we are pretending to get movies from an API call
  const movies = [
    { id: "ksdg182733", name: "The departed" },
    { id: "fe3f18273f", name: "Hot Fuzz" },
    { id: "asdgsdf3dr", name: "Real Steel" },
    { id: "rsdg182as3", name: "Big Lebowski" },
    { id: "ysdg18273w", name: "Blade Runner" },
    { id: "isdg18df6", name: "The Princess Bride" },
    { id: "osdg1827sdf6", name: "Mission Impossible" },
    { id: "csdg18e343", name: "Catch Me if you can" },
    { id: "dsdg18276", name: "High School Musical" },
    { id: "esdg182732", name: "The Princess Bride" },
    { id: "7ads76asd98", name: "Star Wars" },
  ];

  // if you want to change what you're mapping through, don't change the map, change the array you are mapping
  // try replacing movies with longMovies on line 25
  // const longMovies = movies.filter((movie) => movie.name.length > 12);

  return (
    <div>
      <h1>React x Map x Lists x Keys</h1>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
