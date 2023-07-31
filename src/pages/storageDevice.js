import ProductCard from "@/components/ProductCard";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const StorageDevice = ({ data }) => {
    const StorageDevice = data.filter(product => product.category === "Storage Device")
    return (
        <>
            <div className="container mx-auto p-4 my-8">
                <h1 className='text-center text-secondary text-3xl font-bold mb-8'>All Storage Device</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        StorageDevice.map(product => {
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

export default StorageDevice

export async function getStaticProps() {
    try {
        const apiUrl = `${publicRuntimeConfig.apiUrl}/api/data`;
        const response = await fetch(apiUrl);
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