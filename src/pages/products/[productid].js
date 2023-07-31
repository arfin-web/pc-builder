import { useRouter } from 'next/router';
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const ProductDetails = ({ product }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto p-4 my-8">
            <h1 className="text-center text-secondary text-3xl font-bold mb-8">Product Details</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl" key={product._id}>
                <figure><img src={product.image} alt={product.productName} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Name: {product.productName}</h2>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Status: {product.status}</p>
                    <p>Rating: {product.individualRating} / 5 Stars</p>
                    <p>Average Rating: {product.averageRating} / 5 Stars</p>
                    <p>Description: {product.description}</p>
                    <p>Key Features: {product.keyFeatures}</p>
                </div>
            </div>
            <h2 className="text-3xl font-bold my-5">Reviews:</h2>
            <hr className='mb-5' />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center'>
                {
                    product.reviews.map((review, index) => {
                        return (
                            <>
                                <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                    <div className="card-body">
                                        <h2 className="card-title">{review.username}</h2>
                                        <blockquote>"{review.comment}"</blockquote>
                                        <div className="card-actions justify-start">
                                            <p>Rating: {review.rating} / 5 Stars</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    try {
        const response = await fetch(`${publicRuntimeConfig.apiUrl}/api/data`);
        const data = await response.json();

        const paths = data.map((product) => {
            if (product && product._id) {
                return { params: { productid: product._id } };
            }
            return null;
        }).filter((path) => path !== null);

        return {
            paths,
            fallback: true,
        };
    } catch (error) {
        console.error('Error fetching product IDs:', error);
        return {
            paths: [],
            fallback: true,
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const { productid } = params;
        const response = await fetch(`${publicRuntimeConfig.apiUrl}/api/data/${productid}`);
        const data = await response.json();
        return {
            props: {
                data: data?.data || [],
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: [],
            },
        };
    }
}