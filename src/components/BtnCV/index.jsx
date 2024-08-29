import { FaArrowAltCircleDown } from 'react-icons/fa';
import curriculoPDF from '../../assets/Currículo-LuizGustavo-New.pdf'
import styles from "./btnCV.module.css";
import useContexts from '../../hooks/useContext';

export default function BtnCV() {
    const { toogleThemeElement } = useContexts()

    return (
        <a href={curriculoPDF} download='curriculo-luiz.pdf' className={toogleThemeElement(styles.linkCVDark, styles.linkCVLight)}>
            <span>Baixar CV</span>
            <FaArrowAltCircleDown />
        </a>
    )
}