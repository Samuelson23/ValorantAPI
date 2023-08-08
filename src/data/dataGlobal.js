import { getService } from "../service/service.config";
/*
En este archivo dataGlobal lo que hacemos son las peticiones a la api para tenerlas precargadas nada mas entrar en la pagina.
Cada una de las peticiones las guardamos en un array para quitarnos la asincronía y asi poder utilizarlas en componentes directamente desde un array
sin tener que hacer peticiones a la api de nuevo.
*/

export const arrayAgents = await getService("agents?isPlayableCharacter=true");

export const arrayMaps = await getService("maps");

export const arrayWeapons = await getService("weapons");

export const arraySprays = await getService("sprays");
