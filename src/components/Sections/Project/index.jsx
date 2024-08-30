import { useInView } from "react-intersection-observer";
import sbook from "../../../assets/projects/sbook.svg";
import valorantCore from "../../../assets/projects/valorantCore.svg";
import resoluti from "../../../assets/projects/resoluti.svg";
import valorantWebComponent from "../../../assets/projects/valorantWebComponent.svg";
import useContexts from "../../../hooks/useContext";
import CardProjectSmall from "../../CardProjectSmall";
import { TagCss, TagFirebase, TagGit, TagHtml, TagJavascript, TagJetpackCompose, TagKotlin, TagMongoDB, TagMySql, TagNodejs, TagReact, TagSocketIO, TagTypescript } from "../../Tags";
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
                    to='https://github.com/DevelopersVision/FrontEnd-Web_Sbook.git'
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
                    to='https://github.com/luyz-gusta/ValorantCore'
                    toDeploy='https://valorantcore-web.netlify.app/'
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                        </div>
                    }
                />
                <CardProjectSmall
                    name='Resoluti'
                    description='Esse projeto foi desenvolvido como parte de um teste técnico para a empresa Resoluti. Nele, criei o front-end utilizando React, o back-end com TypeScript, e o banco de dados em MySQL. O objetivo principal foi construir um projeto fullstack, onde é possível visualizar a lista de pessoas cadastradas, adicionar novas pessoas, editar registros existentes e excluir cadastros. Além disso, utilizei o Firebase para armazenar imagens e gerar URLs de acesso a elas.'
                    to='https://github.com/luyz-gusta/resoluti'
                    image={resoluti}
                    
                    technologies={
                        <div className={styles.boxTags}>
                            <TagReact />
                            <TagCss />
                            <TagGit />
                            <TagNodejs />
                            <TagTypescript />
                            <TagFirebase />
                            <TagMySql />
                        </div>
                    }
                />
                <CardProjectSmall
                    name='Valorant WebComponent'
                    description='Este projeto teve como objetivo didático o consumo de uma API pública, a utilização de rotas e web components, como parte do curso de Desenvolvimento de Sistemas. Além disso, é um projeto totalmente responsivo, com todo o design do layout criado no Figma.'
                    to='https://github.com/luyz-gusta/Valorant-WebComponent'
                    image={valorantWebComponent}
                    technologies={
                        <div className={styles.boxTags}>
                            <TagHtml />
                            <TagCss />
                            <TagJavascript />
                            <TagGit />
                        </div>
                    }
                />
            </div>
            {/* <Link
                to='/'
                className={styles.btnAllProject}
            >Ver todos</Link> */}
        </section>
    )
}