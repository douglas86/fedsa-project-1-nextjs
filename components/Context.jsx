import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
    const [heart, setHeart] = useState(0);
    const [cart, setCart] = useState(0);
    return (
        <Context.Provider value={{ heart, setHeart, cart, setCart }}>
            {children}
        </Context.Provider>
    );
};
