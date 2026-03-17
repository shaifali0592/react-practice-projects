import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {

        const fetchproduct = async () => {

            const url = "https://dummyjson.com/products/" + id;
            let response = await fetch(url);
            response = await response.json();
            setProduct(response);
        }
        fetchproduct();

    }, []);
    if (!product) return <h2>Loading...</h2>;

    return (
        <div className="product-page-Details">
            <img src={product?.thumbnail} alt={product?.title} />

            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
        </div>
    )
}

export default ProductDetails;