import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Feature from "./components/Feature/Feature";
import Offer from "./components/Offer/Offer";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <Router>
            <Layout>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Banner />
                        <Feature />
                        <ProductList />
                    </Route>

                    <Route path="/product">
                        <ProductList />
                    </Route>

                    <Route path="/product/:slug">
                        <ProductDetails />
                    </Route>

                    <Route path="/offer">
                        <Offer />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
