import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="single-product">
                <div className="product-img">
                    {product.images[0] ? (
                        <img
                            className="img-fluid w-100"
                            src={product.images[0].absolute_path}
                            alt=""
                        />
                    ) : (
                        <img
                            className="img-fluid w-100"
                            src={
                                "https://ui-avatars.com/api/?background=random&name=" +
                                product.name
                            }
                            alt=""
                        />
                    )}
                    <div className="p_icon">
                        <a href="/product">
                            <i className="ti-eye"></i>
                        </a>
                        <a href="/product">
                            <i className="ti-heart"></i>
                        </a>
                        <a href="/product">
                            <i className="ti-shopping-cart"></i>
                        </a>
                    </div>
                </div>
                <div className="product-btm">
                    <Link to={`/product/${product.slug}`} className="d-block">
                        <h4>{product.name}</h4>
                    </Link>
                    <div className="mt-3">
                        <span className="mr-4">${product.price}</span>
                        <del>${product.sale_price}</del>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
