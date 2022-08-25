import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main";
import CustomProvider from "./CustomProvider";

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider titulo="hola">
                <Header />
                <Main />
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App;