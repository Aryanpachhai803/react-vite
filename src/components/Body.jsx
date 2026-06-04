import ProductCard from "./ProductCard.jsx";
import "../styles/Body.css"
import {products} from "../constants/constant.js"

function Body(){
    console.log(products);
    return(
        <main className="product-cards">
            {products.map((product) =>
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