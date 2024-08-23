import { useState } from 'react'
import useContexts from '../../hooks/useContext'
import styles from './header.module.css'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
import iconHomeDark from '../../assets/icons/homeDark.svg'
import iconHomeLight from '../../assets/icons/homeLight.svg'
import iconMenuDark from '../../assets/icons/menuDark.svg'
import iconMenuLight from '../../assets/icons/menuLight.svg'
import iconUserDark from '../../assets/icons/userDark.svg'
import iconUserLight from '../../assets/icons/userLight.svg'
import iconProjectDark from '../../assets/icons/projectDark.svg'
import iconProjectLight from '../../assets/icons/projectsLight.svg'
import { PropTypes } from 'prop-types';


const ItemMenu = ({ children }) => {
    return (
        <li className="ps-menuitem-root css-1t8x7v1">
            <div className="ps-menu-button" data-testid="ps-menu-button-test-id" tabIndex="0">
                <span className="ps-menu-label css-12w9als">
                    {children}
                </span>
            </div>
        </li>
    )
}

ItemMenu.propTypes = {
    children: PropTypes.node
}

export default function Header() {
    const { toogleThemeElement } = useContexts()
    const [collapsed, setCollapsed] = useState(true)

    return (
        <header className={toogleThemeElement(styles.dark, styles.light)}>
            <Sidebar collapsed={collapsed} className={styles.nav}>
                <Menu>
                    <MenuItem onClick={() => setCollapsed(!collapsed)}>
                        <div className={styles.itemMenu}>
                            <img src={toogleThemeElement(iconMenuDark, iconMenuLight)} alt="Icone de casa" />
                            <p>Menu</p>
                        </div>
                    </MenuItem>
                    <div className={styles.navBar}>

                        <ItemMenu>
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                            >
                                <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone de casa" />
                                <p>Home</p>
                            </NavLink>
                        </ItemMenu>

                        <ItemMenu>
                            <NavLink
                                to={'/sobre-mim'}
                                className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                            >
                                <img src={toogleThemeElement(iconUserDark, iconUserLight)} alt="Icone de casa" />
                                <p>Sobre Mim</p>
                            </NavLink>
                        </ItemMenu>

                        <ItemMenu>
                            <NavLink
                                to={'/projetos'}
                                className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                            >
                                <img src={toogleThemeElement(iconProjectDark, iconProjectLight)} alt="Icone de casa" />
                                <p>Projetos</p>

                            </NavLink>
                        </ItemMenu>

                        <ItemMenu>
                            <NavLink
                                to={'/skills'}
                                className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                            >
                                <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone de casa" />
                                <p>Skills</p>
                            </NavLink>
                        </ItemMenu>


                        <ItemMenu>
                            <NavLink
                                to={'/contato'}
                                className={({ isActive }) => isActive ? styles.activeBar : styles.disableBar}
                            >
                                <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone de casa" />
                                <p>Contato</p>
                            </NavLink>
                        </ItemMenu>
                    </div>
                    <NavLink to={'/'} className={styles.replaceTheme}>
                        <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone de casa" />
                        <p>Alterar</p>
                    </NavLink>
                </Menu>
            </Sidebar>
        </header>
    )
}
