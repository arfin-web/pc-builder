import Link from "next/link"

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/online-school-equipment-home_23-2149041148.jpg?w=996&t=st=1690548343~exp=1690548943~hmac=70cad86510f391046906b98934fff0fd75d66f3848e5cfa7efbcdb95836faaae  )' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Personalized PC Creator</h1>
                        <p className="mb-5">Discover and customize your perfect PC setup with our user-friendly PC Builder app. Choose from a wide range of high-performance components and create a computer that suits your needs and preferences. Build your dream PC today!</p>
                        <Link href="/pcbuilder" className="btn btn-primary">Start Building</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner