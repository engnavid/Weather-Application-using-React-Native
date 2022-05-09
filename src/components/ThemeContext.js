import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();


export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
    [darkTheme, setDarkTheme] = useState(false);

    const toggleIntoDarkTheme = () => {
        setDarkTheme(true);
    }

    const toggleIntoLightTheme = () => {
        setDarkTheme(false);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={{ toggleIntoDarkTheme, toggleIntoLightTheme }}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider >
    )
}