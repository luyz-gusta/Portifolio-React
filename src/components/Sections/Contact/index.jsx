import { useInView } from "react-intersection-observer";
import useContexts from "../../../hooks/useContext";
import styles from './contact.module.css'
import BtnCV from "../../BtnCV";

export default function Contact() {
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: contactRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('contact');
        },
    });

    return (
        <section ref={contactRef} className={`${styles.secContact} ${toogleThemeElement(styles.dark, styles.light)}`} id="contact">
            <h1>Contato</h1>
            <div className={styles.containerContact}>
                <div className={styles.boxMain}>
                    <img src="" alt="" />
                    <div className={styles.boxText}>
                        <h2>Luiz Gustavo</h2>
                        <ul className={styles.boxMidia}>
                            <li>
                                <p>luizgustavo.sp2020@gmail.com</p>
                            </li>
                            <li>
                                <p>{'(11) 99490-0485'}</p>
                            </li>
                            <li>
                                <p>Barueri, SP</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.socialMedia}>
                    <BtnCV />
                    
                </div>

            </div>
            <footer>Todos os direitos Reservados | 2023 | DevSide</footer>
        </section>
    )
}