import ProductCard from "./ProductCard.jsx";
import "../styles/Body.css"
import { useEffect, useState } from "react";
import ProductCardSkeleton from './ProductCardSkeleton.jsx';
import { Link } from "react-router-dom";

function Body() {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch('https://fakestoreapi.com/products');
        const jsonData = await data.json();
        console.log(jsonData);
        setProductsList(jsonData);
    }

    function handleTopRatedProducts() {
        const topRatedProducts = productsList.filter((product) => product.rating.rate >= 4);
        setProductsList(topRatedProducts);
    }

    // const [element,setElement] = useState(4);
    // function handleAdd(){
    //     const add = element+1;
    //     setElement(add);
    // }

    return (
        <main className="product-cards">
            <div>
                <button onClick={handleTopRatedProducts}>Top Rated Products</button>
                {/* <button onClick={handleAdd}>Add</button> */}
                {/* <h2>{element}</h2> */}
            </div>
            {productsList.length === 0
                ? Array.from({ length: 4 }).map((_, index) => <ProductCardSkeleton key={index} />)
                : productsList.map((product) =>
                    <Link to={`/${product.id}`} key={product.id}>
                        <ProductCard data={product} />
                    </Link>
                )}
            {/*productsList.map((product) =>
                <ProductCard data={product} key={product.id} />)
             <ProductCard title="Air Jordan 4" description="Comfy shoes with cool design" price="$99" image={rickandmorty} />
            <ProductCard title="Adidas Ultraboost" description="Best for sports" price="$79" image={rickandmorty} />
            <ProductCard title="Nike Air Force 1" description="Streetwear" price="$89" image={rickandmorty} />
            <ProductCard title="Loafers" description="Party shoe" price="$69" image={rickandmorty} /> */}
        </main>
    );
}

export default Body;

// rafce (creats default function format)

