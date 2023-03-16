import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestrauntMenu from "./components/RestaurantMenu";

function App() {
    return (
        <div className="App">
            <Header />
            <Outlet /> {/* Is like a placeholder where children is filled in */}
            <Footer />
        </div>
    );
}

// routing configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            // all children will go into the outlet
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:id",
                element: <RestrauntMenu />,
            },
        ],
    },
]);

export default appRouter;
