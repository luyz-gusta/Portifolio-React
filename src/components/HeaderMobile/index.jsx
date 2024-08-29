import { Menu, Sidebar } from "react-pro-sidebar";
import { PropTypes } from 'prop-types';
import { useState } from "react";
import styles from './headerMobile.module.css'
import useContexts from "../../hooks/useContext";
import SwitchTheme from "../SwitchTheme";
import iconHomeDark from '../../assets/icons/homeDark.svg'
import iconHomeLight from '../../assets/icons/homeLight.svg'
// import iconMenuDark from '../../assets/icons/menuDark.svg'
// import iconMenuLight from '../../assets/icons/menuLight.svg'
import iconUserDark from '../../assets/icons/userDark.svg'
import iconUserLight from '../../assets/icons/userLight.svg'
import iconProjectDark from '../../assets/icons/projectDark.svg'
import iconProjectLight from '../../assets/icons/projectsLight.svg'
import iconContactDark from '../../assets/icons/contactDark.svg'
import iconContactLight from '../../assets/icons/contactLight.svg'

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

export default function HeaderMobile() {
    const [toggled, setToggled] = useState(false);
    const { toogleThemeElement, activeSection } = useContexts()

    return (
        <>
            <Sidebar
                className={styles.menu}
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="all"
            >
                <Menu className={styles.boxMenu}>
                <div className={styles.navBar}>
                        <ItemMenu >
                            <a href="#home" className={activeSection === 'home' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconHomeDark, iconHomeLight)} alt="Icone referênciando o home" />
                                <p>Home</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#aboutMe" className={activeSection === 'aboutMe' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconUserDark, iconUserLight)} alt="Icone referênciando o sobre mim" />
                                <p>Sobre mim</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#project" className={activeSection === 'project' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconProjectDark, iconProjectLight)} alt="Icone referênciando o projetos" />
                                <p>Projetos</p>
                            </a>
                        </ItemMenu>

                        <ItemMenu >
                            <a href="#contact" className={activeSection === 'contact' ? styles.activeBar : styles.disableBar}>
                                <img src={toogleThemeElement(iconContactDark, iconContactLight)} alt="Icone referênciando o contato" />
                                <p>Contato</p>
                            </a>
                        </ItemMenu>
                    </div>
                    <SwitchTheme />
                </Menu>
            </Sidebar>
            <header className={`${toogleThemeElement(styles.dark, styles.light)} ${styles.headerMobile}`}>
                
            </header>
        </>
    )
}