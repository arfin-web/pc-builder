import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/products/${product._id}`}>
            <div className="card w-80 shadow-xl">
                <figure>
                    <img src={product.image} alt={product.productName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>{product.category}</p>
                    <p>{product.price} USD</p>
                    <p>{product.status}</p>
                    <p>Rating: {product.rating} Stars</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;