import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <>
            <h1 className="my-5 text-3xl font-extrabold text-center text-purple-700 bg-purple-300">Awesome Products: {products.length}</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </>
    );
};

export default ProductList;