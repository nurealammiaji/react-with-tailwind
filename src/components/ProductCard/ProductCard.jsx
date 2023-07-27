const ProductCard = ({product}) => {

    console.log(product);

    return (
        <div className="p-4 text-center border rounded-md">
            <div className="mx-auto w-28">
                <img className="h-28" src={product?.image} alt="" />
            </div>
            <h1 className="text-xl">{product?.title}</h1>
            <p>Price: ${product.price}</p>
            <small>Rating: {product?.rating?.rate} </small>
        </div>
    );
};

export default ProductCard;