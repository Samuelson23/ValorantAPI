import {
  favAgents,
  favMaps,
  favSprays,
  favWeapons,
} from "../data/dataFavorites";

/*
Esta funcion comprueba si el elemento que recibe el boton esta dentro del array correspondiente. Se encarga de cambiar la clase al boton
para que cambie el color y de incluir o eliminar el elemento del array
*/
const checkInArray = (element, array) => {
  const btn = document.getElementById(`${element.uuid}`);
  btn.classList.toggle("btnInFav");

  if (!array.includes(element.uuid)) {
    array.push(element.uuid);
  } else {
    for (let x = 0; x < array.length; x++) {
      if (array[x] == element.uuid) {
        array.splice(x, 1);
        btn.removeAttribute("class");
        btn.setAttribute("class", "btnAddFav");
      }
    }
  }
};

/*
Esta funcion se encarga de gestionar en que array guardamos el elemento que recibe el boton mediante el idArray que le pasamos
*/
export const switchFavs = (elem, id) => {
  switch (id) {
    case "agent":
      checkInArray(elem, favAgents);
      return favAgents;

    case "map":
      checkInArray(elem, favMaps);
      return favMaps;

    case "weapon":
      checkInArray(elem, favWeapons);
      return favWeapons;

    case "spray":
      checkInArray(elem, favSprays);
      return favSprays;
  }
  return favAgents, favMaps, favSprays, favWeapons;
};
