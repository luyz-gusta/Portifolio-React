import useContexts from "../../../hooks/useContext"
import { useInView } from 'react-intersection-observer';
import styles from "./home.module.css";
import imagemLuiz from '../../../assets/luizgustavo.jpg'
import imagemLuizCircle from '../../../assets/luizgustavoCircle.jpg'
import { useEffect, useState } from "react";
import BtnCV from "../../BtnCV";

export default function Home() {
    const { setActiveSection, toogleThemeElement } = useContexts()
    const [imageLuiz, setImageLuiz] = useState(window.innerWidth <= 1360 ? imagemLuizCircle : imagemLuiz)

    useEffect(() => {
        const handleResize = () => {
            setImageLuiz(window.innerWidth <= 1360 ? imagemLuizCircle : imagemLuiz)
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

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
                    <BtnCV />
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
            <img src={imageLuiz} alt="Imagem do desenvolvedor do portifólio" />
        </section>
    )
}