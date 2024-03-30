import React, { createContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactNode } from 'react';

export interface Theme {
  backgroundColor: string,
  textColor: string,
}

export const THEME: { dark: Theme, light: Theme } = {
  light: {
    backgroundColor: 'bg-gray-100',
    textColor: 'text-black'
  },
  dark: {
    backgroundColor: 'bg-black',
    textColor: 'text-white'
  }
};
export interface  ContextProps {
  children: ReactNode;
}

export interface ThemeContextType {
  themeStyle: Theme,
  setThemeStyle: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider = ({ children }: ContextProps) => {
  const [themeStyle, setThemeStyle ] = useState<Theme>(THEME.light);

  const contextValue = useMemo(() => (
    {
      themeStyle,
      setThemeStyle
    }
  ), [themeStyle]);
  
  return(
    <ThemeContext.Provider value={contextValue}>
      { children }
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
