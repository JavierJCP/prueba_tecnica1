// export const getRandomFact = () => {
//   return fetch(`https://catfact.ninja/fact`)
//     .then((res) => res.json())
//     .then((json) => {
//       const { fact } = json;
//       return fact;
//     });
// };

// podemos convertir en un async await la funcion anterior poniendo (crtl + .) en el nombre

export const getRandomFact = async () => {
  const res = await fetch(`https://catfact.ninja/fact`);
  const json = await res.json();
  const { fact } = json;
  return fact;
};
