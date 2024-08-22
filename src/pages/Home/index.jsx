import useContexts from "../../hooks/useContext"

export default function Home(){
    const { toogleTheme } = useContexts()
    return(

        <div>
            <h1>Home</h1>
            <button onClick={toogleTheme}>Tste</button>
        </div>
    )
}