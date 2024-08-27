import { useInView } from "react-intersection-observer";
import useContexts from "../../../hooks/useContext";
import styles from './contact.module.css'

export default function Contact(){
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: contactRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('contact');
        },
    });

    return(
        <section ref={contactRef} className={`${styles.secHome} ${toogleThemeElement(styles.dark, styles.light)}`} id="contact">
            <h1>Contato</h1>

            <footer></footer>
        </section>
    )
}