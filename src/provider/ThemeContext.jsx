import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(()=>{
        document.body.style.backgroundColor = theme.palette.background.default
    })
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? "dark" : "light",
                    primary: {
                        main: darkMode ? '#00ea90' : '#ff156f',
                    },
                    secondary: {
                        main: darkMode ? '#00FF87' : '#ff0b69',
                    },
                    background: {
                        default: darkMode ? '#000000' : '#ffffff',
                    },
                    text: {
                        primary: darkMode ? '#ffffff' : '#000000',
                    },
                },
                components: {
                    MuiTextField: {
                        styleOverrides: {
                            root: {
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                                    '& fieldset': {
                                        borderColor: darkMode ? '#00f496' : '#ff0b69',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: darkMode ? '#00f496' : '#ff0b69',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: darkMode ? '#00f496' : '#ff0b69',
                                    },
                                },
                            },
                        },
                    },
                },
            }),
            [darkMode]
        );

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
