import React, { createContext, ReactNode, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextType {
    theme?: string;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');
    console.log('tt =', theme)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};