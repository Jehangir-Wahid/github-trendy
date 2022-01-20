import AppRoutes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import ListingHeader from "../components/ListingHeader";
import Spinner from "../components/Spinner";
import {useSelector} from "react-redux";
import {State} from "../redux/reducers";

function App() {
    const isLoading = useSelector((state: State) => state.general.isLoading);
    
    return (
        <>
            <Header/>
            <main className="bg-dark py-10" role="main">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card border-dark-secondary">
                                <ListingHeader/>
                                <div className="card-body p-0 bg-dark">
                                    { isLoading ? <Spinner/> : null }
                                    <AppRoutes/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default App;
