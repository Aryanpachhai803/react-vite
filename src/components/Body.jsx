import ProductCard from "./ProductCard.jsx";
import "../styles/Body.css"
import {products} from "../constants/constant.js"
import {useState} from "react";

function Body(){
    const [productList, setProductList] = useState(products);
    const [element,setElement] = useState(4);
    
    
    function handleTopRatedProducts(){
        const topRatedProducts = products.filter((product) => product.rating.rate >= 4);
        setProductList(topRatedProducts);
        console.log(topRatedProducts);
    }
    function handleAdd(){
        const add = element+1;
        setElement(add);
    }
    return(
        <main className="product-cards">
            <div>
                <button onClick={handleTopRatedProducts}>Top Rated Products</button>
                <button onClick={handleAdd}>Add</button>
                <h2>{element}</h2>
            </div>
            {productList.map((product) =>
            <ProductCard data={product} key={product.id} />)}
            {/* <ProductCard title="Air Jordan 4" description="Comfy shoes with cool design" price="$99" image={rickandmorty} />
            <ProductCard title="Adidas Ultraboost" description="Best for sports" price="$79" image={rickandmorty} />
            <ProductCard title="Nike Air Force 1" description="Streetwear" price="$89" image={rickandmorty} />
            <ProductCard title="Loafers" description="Party shoe" price="$69" image={rickandmorty} /> */}
        </main>
    );
}

export default Body;

// rafce (creats default function format)

