import useContexts from "../../hooks/useContext"
import { useInView } from 'react-intersection-observer';
import styles from "./sobreMim.module.css";
import imageLuiz from "../../assets/luizgustavo2.png";
import SlideTech from './../SlideTech/index';

export default function SobreMim() {
  const { setActiveSection, toogleThemeElement } = useContexts()

  const { ref: sobreMimRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection('sobre-mim');
    },
  });

  return (
    <section id="sobre-mim" ref={sobreMimRef} className={`${styles.secSobreMim} ${toogleThemeElement(styles.dark, styles.light)}`}>
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
      <div className={styles.boxMan}>
        <p className={styles.textAbout}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <img src={imageLuiz} alt="Imagem do desenvolvedor" />
      </div>
      <div className={styles.slides}>

      </div>
      <SlideTech />
    </section>
  )
}