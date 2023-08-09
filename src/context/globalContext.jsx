import React, { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Creamos un contexto nuevo
const FavContext = createContext()

/*
Creamos un componente que englobe a toda nuestra app que tenga 2 funciones:
    1) Crear un estado (va a ser global al englobar a todo) que setee los favoritos y los guarde en un array
    2) Utilizamos useMemo() para guardar (memorizar) el estado cada vez que se añada un favorito
En el return vemos como el contexto creado (FavContext) engloba al children (toda nuestra app, el resto de componentes) 
y tiene la prop -> "value" que es el useMemo()
*/
export const FavContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState(()=>[{}])
    const pruebaDelContexto = "hola contexto"
    const value = useMemo(()=>{favorites, setFavorites},[favorites])

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>
}

/*
Creamos una funcion (hook) que nos utiliza el contexto FavContext, con lo cual cuando la llamemos tendremos acceso al estado global "favorites"
*/
export const useGlobalContext = () =>{
    return useContext(FavContext)
}
