const ProductCard = ({product}) => {

    return (
        <div className="p-4 text-center bg-purple-200 border rounded-md">
            <div className="mx-auto w-28">
                <img className="h-28" src={product?.image} alt="" />
            </div>
            <h1 className="text-xl">{product?.title}</h1>
            <br />
            <p>Price: ${product?.price}</p>
            <br />
            <small>Rating: {product?.rating?.rate}</small>
            <br />
            <br />
            <button className="w-full px-4 py-2 bg-purple-400 rounded-md">Add to Cart</button>
        </div>
    );
};

export default ProductCard;