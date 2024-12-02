import React, { createContext, useState, useContext } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    const toggleFavorito = (restauranteId) => {
        if (favoritos.includes(restauranteId)) {
            // Remover dos favoritos
            setFavoritos(favoritos.filter((id) => id !== restauranteId));
        } else {
            // Adicionar aos favoritos
            setFavoritos([...favoritos, restauranteId]);
        }
    };

    return (
        <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};
