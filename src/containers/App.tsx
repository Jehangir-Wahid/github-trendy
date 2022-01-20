import AppRoutes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
    return (
        <>
            <Header/>
            <main className="bg-dark py-10" role="main">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <AppRoutes/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default App;
