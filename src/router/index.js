import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
import Body from "../components/Body";
import ContactUs from "../components/ContactUs.jsx";
const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Body
            },
            {
                path: "/contact",
                Component: ContactUs
            }
        ]
    }
])

export default appRouter;