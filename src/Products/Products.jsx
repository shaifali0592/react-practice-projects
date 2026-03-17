import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Paginations from "./paginations";
import { useNavigate } from "react-router-dom";



const page_size = 8;
function Products() {
    const [products, setProducts] = useState([]);
    const [currentpage, setCurrentPage] = useState(0);
        const navigate = useNavigate();
    const fetchproducts = async () => {
        const url = "https://dummyjson.com/products?limit=500";
        let response = await fetch(url);
        response = await response.json();
        setProducts(response.products);
    }

    useEffect(() => {
        fetchproducts();
    }, [])
    const start = currentpage * page_size;
    const end = start + page_size;
    const total_number_of_page = Math.ceil(products.length / page_size);

    return (
        <>
            <div className="producs-container">
                {
                    products.slice(start, end).map((item) => (
                        <ProductCard onClick={() =>{ navigate("/products/" +item.id)}} key={item.id} id={item.id} image={item.thumbnail} title={item.title} desc={item.description} />
                    ))
                }

            </div>
            {products.length > 0 && <Paginations currentpage={currentpage} products={products} setCurrentPage={setCurrentPage} total_number_of_page={total_number_of_page} />}

        </>
    )
}

export default Products;