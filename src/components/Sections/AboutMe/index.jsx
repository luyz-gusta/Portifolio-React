import useContexts from "../../../hooks/useContext"
import { useInView } from 'react-intersection-observer';
import styles from "./aboutMe.module.css";
import imageLuizDark from "../../../assets/luizgustavoDark.png";
import imageLuizLight from "../../../assets/luizgustavoLight.png";
import SlideTech from '../../SlideTech/index';

export default function SobreMim() {
  const { setActiveSection, toogleThemeElement } = useContexts()

  const { ref: aboutMeRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection('aboutMe');
    },
  });

  return (
    <section id="aboutMe" ref={aboutMeRef} className={`${styles.secAboutMe} ${toogleThemeElement(styles.dark, styles.light)}`}>
      <div className={styles.containerMain}>
        <div className={styles.boxMain}>
          <div className={styles.boxText}>
            <h2>Sobre mim</h2>
            <h1>Conheça mais sobre mim</h1>
            <div className={styles.boxForms}>
              <div className={styles.line}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </div>
          <p className={styles.textAbout}>
            Olá! Sou Luiz, Desenvolvedor Full-Stack e estudante do segundo semestre de Engenharia de Software na FIAP. Já sou formado em Informática pelo ITB e Desenvolvimento de Sistemas pelo Senai, o que me proporcionou uma base sólida em tecnologia. Atualmente, estou aprofundando minha experiência em front-end, com foco em soluções inovadoras e impactantes utilizando tecnologias fullstack JS.
          </p>
        </div>
        <div className={styles.boxImg}>
        <img src={toogleThemeElement(imageLuizLight, imageLuizDark)} alt="Imagem do desenvolvedor" />
        </div>
      </div>
      <div className={styles.slides}>
        <SlideTech />
      </div>
    </section>
  )
}