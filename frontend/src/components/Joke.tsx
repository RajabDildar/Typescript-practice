import { useEffect, useState, type FC } from "react";
interface Joke {
  type?: string;
  setup?: string;
  punchline?: string;
  id?: number;
}

const Joke: FC = () => {
  const [newJoke, setNewJoke] = useState<Joke>({});

  const getJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const joke = await res.json();
    setNewJoke(joke);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <p>{newJoke?.type ?? "Loading"}</p>
      <p>{newJoke?.id ?? "Loading"}</p>
      <p>{newJoke?.setup ?? "Loading"}</p>
      <p>{newJoke?.punchline ?? "Loading"}</p>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
};

export default Joke;
