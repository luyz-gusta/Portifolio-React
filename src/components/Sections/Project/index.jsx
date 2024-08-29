import { useInView } from "react-intersection-observer";
import landingPagePikachu from "../../../assets/landingPagePikachu.png";
import sbook from "../../../assets/projects/sbook.svg";
import valorantCore from "../../../assets/projects/valorantCore.svg";
import useContexts from "../../../hooks/useContext";
import CardProjectSmall from "../../CardProjectSmall";
import { TagCss, TagGit, TagHtml, TagJavascript, TagJetpackCompose, TagKotlin, TagMongoDB, TagMySql, TagNodejs, TagReact, TagSocketIO } from "../../Tags";
import styles from "./project.module.css";

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
                    name='S-Book'
                    description='O S-book é uma plataforma web e mobile que facilita a troca, venda e doação de livros, promovendo a leitura, reduzindo o desperdício e incentivando a comunidade a compartilhar suas paixões literárias. Esse foi o meu projeto de conclusão do curso de Desenvolvimento de Sistemas, realizado em equipe, onde utilizamos a metodologia ágil Scrum para organizar o trabalho. Atuei como desenvolvedor fullstack e participei ativamente de todas as fases do projeto.'
                    image={sbook}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                            <TagNodejs />
                            <TagSocketIO />
                            <TagKotlin />
                            <TagJetpackCompose />
                            <TagMySql />
                            <TagMongoDB />

                        </div>
                    }
                />
                <CardProjectSmall
                    name='ValorantCore'
                    description='O ValorantCore é um site totalmente responsivo dedicado a um dos jogos mais populares atualmente, o Valorant. Desenvolvi este projeto enquanto praticava React, utilizando hooks, incluindo a Context API. Usei uma API pública do jogo para obter dados e gerar os cards dos agentes e mapas.'
                    image={valorantCore}
                    btnDeploy={true}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                        </div>
                    }
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
            {/* <Link
                to='/'
                className={styles.btnAllProject}
            >Ver todos</Link> */}
        </section>
    )
}