/**
 * 
 * @param {object} datosDePeticion datos como la url y el dato a buscar 
 * @returns {object} 
 */

export default async function manejadorPeticiones(datosDePeticion={}) {
  const url = `${datosDePeticion.url}\\${datosDePeticion.data}`;
  const peticion = await fetch(url);
  const data = await peticion.json();

  return data;
}
