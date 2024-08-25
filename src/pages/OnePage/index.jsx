import Header from "../../components/Header"
import Home from "../../components/Home"
import SobreMim from "../../components/SobreMim"
import useContexts from "../../hooks/useContext"

export default function OnePage() {
    const { theme } = useContexts()

    return (
        <div className="containerBody" id={theme}>
            <Header />
            <main>
                <Home />
                <SobreMim />
            </main>
        </div>
    )
}