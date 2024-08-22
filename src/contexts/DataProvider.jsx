import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';

export const DataContext = createContext({})

DataProvider.propTypes = {
    children: PropTypes.node
}

export default function DataProvider({children}){
    const [theme, setTheme] = useState('dark')
    const toogleTheme = () => setTheme(theme === 'dark' ? 'light'  : 'dark')
    const dados ={
        theme, toogleTheme
    }
    return(
        <DataContext.Provider value={dados}>
            {children}
        </DataContext.Provider>
    )
}