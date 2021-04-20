import React, { Component } from "react";
import axios from "axios";
import Product from "./Product/Product";

export default class ProductList extends Component {
    state = {
        products: [],
        isLoaded: false,
    };
    componentDidMount() {
        this.fetchProduct();
    }

    fetchProduct() {
        axios
            .get("http://eshop-laravel.test/api/v1/product")
            .then((response) => {
                this.setState({
                    products: response.data.products,
                    isLoaded: true,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { products, isLoaded } = this.state;
        return (
            <section className="inspired_product_area section_gap_bottom_custom mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h2>
                                    <span>New products</span>
                                </h2>
                                <p>
                                    Bring called seed first of third give itself
                                    now ment
                                </p>
                            </div>
                        </div>
                    </div>

                    {isLoaded ? (
                        <div className="row">
                            {products.map((product) => (
                                <Product product={product} key={product.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-border text-info"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
