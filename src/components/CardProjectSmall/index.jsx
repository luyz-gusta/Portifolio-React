import { PropTypes } from 'prop-types';
import styles from './cardProjectSmall.module.css'
import { Link } from 'react-router-dom';
import useContexts from '../../hooks/useContext';

CardProjectSmall.propTypes = {
    technologies: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string
}

export default function CardProjectSmall({ technologies, name, description, image, to}) {
    const { toogleThemeElement } = useContexts()
    
    return (
        <div className={`${styles.cardProject} ${toogleThemeElement(styles.dark, styles.light)}`}>
            <div className={styles.dataProject}>
                <img src={image} alt={name} />
                <div className={styles.boxText}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.box}>
                {technologies}
                <Link to={`/${to}`} className={styles.btn}>Saber mais</Link>
            </div>
        </div>
    )
}