import { useInView } from "react-intersection-observer";
import useContexts from "../../../hooks/useContext";
import styles from './contact.module.css'
import BtnCV from "../../BtnCV";
import luizGustavo from '../../../assets/luizgustavoContact.svg'
import mailDark from '../../../assets/icons/mailDark.svg'
import mailLight from '../../../assets/icons/mailLight.svg'
import phoneDark from '../../../assets/icons/phoneDark.svg'
import phoneLight from '../../../assets/icons/phoneLight.svg'
import locationDark from '../../../assets/icons/locationDark.svg'
import locationLight from '../../../assets/icons/mailLight.svg'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: contactRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('contact');
        },
    });

    return (
        <>
            <section ref={contactRef} className={`${styles.secContact} ${toogleThemeElement(styles.dark, styles.light)}`} id="contact">
                <h1>Contato</h1>
                <div className={styles.containerContact}>
                    <div className={styles.boxMain}>
                        <img src={luizGustavo} alt="Imagem do desenvolvedor" className={styles.imgLuiz} />
                        <div className={styles.boxText}>
                            <h2>Luiz Gustavo</h2>
                            <ul className={styles.boxMidia}>
                                <li>
                                    <img src={toogleThemeElement(mailDark, mailLight)} alt="Icone de email" />
                                    <p>luizgustavo.sp2020@gmail.com</p>
                                </li>
                                <li>
                                    <img src={toogleThemeElement(phoneDark, phoneLight)} alt="Icone de email" />
                                    <p>{'(11) 99490-0485'}</p>
                                </li>
                                <li>
                                    <img src={toogleThemeElement(locationDark, locationLight)} alt="Icone de email" />
                                    <p>Barueri, SP</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.socialMedia}>
                        <BtnCV />
                        <div className={styles.listMedia}>
                            <a href="https://github.com/luyz-gusta" className={styles.itemMedia}>
                                <span>
                                    <FaGithub />
                                </span>
                                <p>luyz-gusta</p>
                            </a>
                            <a href="https://www.linkedin.com/in/luyz-gusta/" className={styles.itemMedia}>
                                <span>
                                    <FaLinkedinIn />
                                </span>
                                <p>Luiz Gustavo Da Silva</p>
                            </a>
                            <a href="https://www.instagram.com/luyz.gusta/" className={styles.itemMedia}>
                                <span>
                                    <FaInstagram />
                                </span>
                                <p>@luyz.gusta</p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <footer className={`${toogleThemeElement(styles.darkFooter, styles.lightFooter)}`}>
                <p>&copy; 2024 Luiz Gustavo. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}