import { useState } from 'react'
import useContexts from '../../hooks/useContext'
import styles from './header.module.css'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
import iconHome from '../../assets/icons/home.svg'

export default function Header() {
    const { theme } = useContexts()
    const [collapsed, setCollapsed] = useState(true)


    return (
        <header className={theme === 'dark' ? styles.dark : styles.light}>
            {/* {isExpanded ?
                <nav className={styles.navExpanted}>
                    <button onClick={() => setIsExpanded(!isExpanded)}>ATasdja</button>
                </nav>
                :
                <nav className={styles.nav}>
                    <button onClick={() => setIsExpanded(!isExpanded)}>ATasdja</button>
                </nav>
            } */}

            <Sidebar collapsed={collapsed} className={styles.nav}>
                <Menu>
                    <MenuItem onClick={() => setCollapsed(!collapsed)}>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                        >
                            <img src={iconHome} alt="Icone de casa" />
                            <p>Home</p>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink>
                            Home
                        </NavLink>
                    </MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                    <MenuItem> Examples</MenuItem>
                </Menu>
            </Sidebar>
        </header>
    )
}