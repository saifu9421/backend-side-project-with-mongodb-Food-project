import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
           <h1 className="text-4xl mt-8 font-serif font-semibold text-orange-400 text-center">Food Items </h1>
           <div className="grid md:grid-cols-3 gap-7">
            {
                products.map(product=> <ProductCard 
                 key={product._id}
                 product={product}
                >
                 
                </ProductCard>)
            }
           </div>
        </div>
    );
};

export default Home;