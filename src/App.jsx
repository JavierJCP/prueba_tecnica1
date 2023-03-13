import React from 'react';
import { useCatFact } from './hooks/useCatFact';
import { useCatImg } from './hooks/useCatImg';

const CAT_PREFIX_IMG_URL = 'https://cataas.com';

// function useCatImg({ fact }) {
//   const [url, setUrl] = useState('');

//   useEffect(() => {
//     if (!fact) return;
//     const firstWord = fact.split(' ', 1)[0];
//     console.log(firstWord);

//     fetch(
//       `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const { url } = data;
//         setUrl(url);
//       });
//   }, [fact]);

//   return { url };
// }

// function useCatFact() {
//   const [fact, setFact] = useState(null);

//   const updateFact = () => {
//     getRandomFact().then((newFact) => setFact(newFact));
//   };
//   useEffect(updateFact, []);

//   return { fact, updateFact };
// }

function App() {
  // const [fact, setFact] = useState(null);
  // const [url, setUrl] = useState('');
  const { fact, updateFact } = useCatFact();
  const { url } = useCatImg({ fact });

  // useEffect(() => {
  //   // fetch(`https://catfact.ninja/fact`)
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     const { fact } = json;
  //   //     setFact(fact);
  //   //   });
  //   getRandomFact().then((newFact) => setFact(newFact));
  // }, []);

  // useEffect(() => {
  //   if (!fact) return;
  //   const firstWord = fact.split(' ', 1)[0];
  //   console.log(firstWord);

  //   fetch(
  //     `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { url } = data;
  //       setUrl(url);
  //     });
  // }, [fact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch(`https://catfact.ninja/fact`);
    // const json = await res.json();
    // const { fact } = json;
    // setFact(fact);
    // const newFact = await getRandomFact();
    // setFact(newFact);
    updateFact();
  };

  return (
    <div className='app'>
      <header>
        <h1 className='title'>Cat Fact App</h1>
        <form onSubmit={handleSubmit} className='cat__form'>
          <button type='submit'>New Fact</button>
        </form>
      </header>

      <main>
        {fact && <p>{fact}</p>}
        <img
          src={`${CAT_PREFIX_IMG_URL}${url}`}
          alt={`Image extracted using the first word for ${fact}`}
        />
      </main>
    </div>
  );
}

export default App;
