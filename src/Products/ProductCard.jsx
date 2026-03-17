import { Link } from "react-router";

function ProductCard({ image, title, desc, id, onClick  }) {

  
    return (
        <>
            <Link to={"/products/" + id } onClick={onClick} id={id} className="product-card" >
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <p>{desc}</p>
             
               
            </Link>
        </>
    )
}

export default ProductCard;