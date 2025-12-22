    import React, { createContext, useState, useEffect } from 'react';
    import { getInitialTheme } from './getInitialTheme';

    export const ThemeContext = createContext();

    export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // HTML 요소에 data-theme 속성 적용
        document.documentElement.setAttribute('data-theme', theme);
        
        // localStorage에 저장
        try {
        window.localStorage.setItem('theme', theme);
        } catch (error) {
        console.error('Failed to save theme to localStorage:', error);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    }
