import axios from "axios";
import { axiosUtil } from "../utils/axiosRequest";
/*
Creamos una función que nos permite llamar al servicio de la API con diferentes endPoints
Para ello creamos un util en el cual creamos y gestionamos el servicio
Y aquí creamos la configuracion del servicio para tener una URL dinamica, y segun el parametro que le pasemos
accederá a un endpoint u otro.
*/

export const getService = async (endPoint) => {
  const optionsRequest = {
    method: "GET",
    url: `https://valorant-api.com/v1/${endPoint}`,
  };

  return await axiosUtil(optionsRequest);
};
