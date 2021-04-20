import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
    const slug = useParams();
    console.log(slug);
    return <div>{slug}</div>;
}

export default ProductDetails;
