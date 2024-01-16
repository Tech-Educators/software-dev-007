import { useSearchParams, Link } from "react-router-dom";

export default function Animals() {
  // useSearchParams returns an array, we are
  const [searchParams] = useSearchParams();

  const sortType = searchParams.get("sort");

  const animals = [
    "Giraffe",
    "Badger",
    "Baboon",
    "Cat",
    "Monstercat",
    "Fuzzy",
    'Indiana "Indi" Jones',
    "Humancat",
    "Koala",
    "Werewolf",
    "Aardvark",
    "Capibara",
    "Rat",
    "Rhino",
    "Hippopotomus",
  ];

  if (sortType === "asc") {
    animals.sort();
  } else if (sortType === "desc") {
    animals.sort().reverse();
  }

  return (
    <div>
      <h2>Animals</h2>
      <div className="sort-btns">
        <Link to="/animals?sort=asc">Sort Alphabetically</Link>
        <Link to="/animals?sort=desc">Sort De-Alphabetically</Link>
        <Link to="/animals">Sort NOT</Link>
      </div>
      {animals.map((animal) => {
        return <p key={animal}>{animal}</p>;
      })}
    </div>
  );
}
