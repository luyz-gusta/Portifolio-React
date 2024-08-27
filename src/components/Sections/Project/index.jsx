import { useInView } from "react-intersection-observer";
import landingPagePikachu from "../../../assets/landingPagePikachu.png";
import useContexts from "../../../hooks/useContext";
import CardProjectSmall from "../../CardProjectSmall";
import { TagCss, TagHtml, TagJavascript, TagSocketIO } from "../../Tags";
import styles from "./project.module.css";
import { Link } from "react-router-dom";

export default function Project() {
    const { setActiveSection, toogleThemeElement } = useContexts()

    const { ref: profectRef } = useInView({
        threshold: 0.5,
        onChange: (inView) => {
            if (inView) setActiveSection('project');
        },
    });

    return (
        <section id="project" ref={profectRef} className={`${styles.secProject} ${toogleThemeElement(styles.dark, styles.light)}`}>
            <h1>Projetos</h1>
            <div className={styles.containerProjects}>
                <CardProjectSmall
                    name='Landing page Pikachu'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    to='landing-page-pikachu'
                    image={landingPagePikachu}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagHtml />
                            <TagCss />
                            <TagSocketIO />
                        </div>
                    }
                />
                <CardProjectSmall
                    name='Landing page Pikachu'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    to='landing-page-pikachu'
                    image={landingPagePikachu}
                    technologies={<TagJavascript />}
                />
                <CardProjectSmall
                    name='Landing page Pikachu'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    to='landing-page-pikachu'
                    image={landingPagePikachu}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagHtml />
                            <TagCss />
                            <TagSocketIO />
                        </div>
                    }
                />
                <CardProjectSmall
                    name='Landing page Pikachu'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    to='landing-page-pikachu'
                    image={landingPagePikachu}
                    technologies={<TagJavascript />}
                />
            </div>
            <Link
                to='/'
                className={styles.btnAllProject}
            >Ver todos</Link>
        </section>
    )
}