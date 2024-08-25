import useContexts from "../../hooks/useContext"
import { useInView } from 'react-intersection-observer';
import styles from "./home.module.css";
import imagemLuiz from '../../assets/luizgustavo.jpg'
import { FaArrowAltCircleDown } from "react-icons/fa";
import curriculoPDF from '../../assets/Currículo-Luiz Gustavo-New.pdf'

export default function Home() {
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: homeRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('home');
        },
    });

    return (
        <section id="home" className={`${styles.secHome} ${toogleThemeElement(styles.dark, styles.light)}`} ref={homeRef}>
            <div className={styles.containerText}>
                <div className={styles.boxText}>
                    <h2>Olá, me chamo <strong>Luiz Gustavo!</strong></h2>
                    <h1>Desenvolvedor <br />Fullstack</h1>
                    <p>Transformo ideias em soluções digitais, dominando cada etapa do processo.</p>
                    <a href={curriculoPDF} download='curriculo-luiz.pdf' className={styles.linkCV}>
                        <span>Baixar CV</span>
                        <FaArrowAltCircleDown />
                    </a>
                </div>
                <div className={styles.scroll}>
                    <span>SCROLL</span>
                    <div className={styles.lineScroll}></div>
                </div>
            </div>
            <div className={styles.containerLine}>
                <div className={styles.boxLine}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.boxLine}>
                    <div className={styles.line}></div>
                </div>
            </div>
            <img src={imagemLuiz} alt="Imagem do desenvolvedor do portifólio" />
        </section>
    )
}