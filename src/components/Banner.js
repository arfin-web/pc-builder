import Link from "next/link"

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/laptop-half-closed-dark-with-colourful-glow-glasses-paper-cup_169016-33951.jpg?w=996&t=st=1691562585~exp=1691563185~hmac=410feff50af91e3db62d49b615bdcc0b00db8fb495855ddfec9c066c8a125eb5)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"><span className="text-secondary">Personalized</span> PC Creator</h1>
                        <p className="mb-5">Discover and customize your perfect PC setup with our user-friendly PC Builder app. Choose from a wide range of high-performance components and create a computer that suits your needs and preferences. Build your dream PC today!</p>
                        <Link href="/pcbuilder" className="btn btn-secondary">Start Building</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner