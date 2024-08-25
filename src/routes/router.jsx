import { createBrowserRouter } from "react-router-dom";
import OnePage from "../pages/OnePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <OnePage />
    }
])

export default router;