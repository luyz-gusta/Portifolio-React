import { Outlet } from "react-router-dom"
import Header from './../components/Header/index';
import useContexts from "../hooks/useContext";

export default function RootLayout() {
    const { theme } = useContexts()

    return (
        <div className="containerBody" id={theme}>
            <Header />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}