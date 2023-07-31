import ComponentCard from "@/components/ComponentCard"

const PowerSupplyUnit = ({ data }) => {
    const PowerSupplyUnit = data.filter(product => product.category === "Power Supply Unit")
    return (
        <>
            <div className="container mx-auto p-4 my-8">
                <h1 className='text-center text-secondary text-3xl font-bold mb-8'>All Power Supply Unit</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
                    {
                        PowerSupplyUnit.map(product => {
                            return (
                                <ComponentCard product={product} key={product._id} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PowerSupplyUnit

export async function getServerSideProps() {
    try {
        const response = await fetch("http://localhost:3000/api/data");
        const data = await response.json();

        return {
            props: {
                data: data.data,
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                data: null,
            },
        };
    }
}