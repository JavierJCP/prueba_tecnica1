import { useEffect, useState } from 'react';

export function useCatImg({ fact }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ', 1)[0];
    console.log(firstWord);

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setUrl(url);
      });
  }, [fact]);

  return { url };
}
