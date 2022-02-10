/**
 * 
 * @param {String} pokemon El pokemon que se va a buscar 
 * @returns {object} 
 */

export default async function manejadorPeticiones(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const peticion = await fetch(url);
  const data = await peticion.json();

  return data;
}
