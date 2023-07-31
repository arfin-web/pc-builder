import ProductCard from "@/components/ProductCard";

const others = ({ data }) => {
    const others = data.filter(product => product.category === "Others (GPU)")
    return (
        <>
            <div className="container mx-auto p-4 my-8">
                <h1 className='text-center text-secondary text-3xl font-bold mb-8'>Others</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        others.map(product => {
                            return (
                                <ProductCard product={product} key={product._id} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default others

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    return {
        props: {
            data: data?.data
        },
    };
}