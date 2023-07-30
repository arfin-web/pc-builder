import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4 my-8">
        <h1 className='text-center text-secondary text-3xl font-bold mb-8'>Featured Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
          {
            data?.slice(0, 6).map(product => {
              return (
                <ProductCard product={product} key={product._id} />
              )
            })
          }
        </div>
      </div>
      <div className="container mx-auto p-4 my-8">
        <h1 className='text-center text-secondary text-3xl font-bold mb-8'>Categories</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
          <Link href="/cpu">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-photo/circuit-cyberspace-closeup-with-neon-lights_90220-1200.jpg?t=st=1690628660~exp=1690632260~hmac=e37b3e80fa7a3f1c22b12cd0d798b5512157c1579e86dfb60d0a4246db97503e&w=996" alt="CPU / Processor" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">CPU / Processor</h2>
              </div>
            </div>
          </Link>
          <Link href="/motherboard">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-vector/realistic-style-microchip-processor-background_52683-58932.jpg?w=996&t=st=1690639666~exp=1690640266~hmac=f089a2268c655ac9fe19c0074999d5daaf2783af9652843c55e392448b8090ab" alt="Motherboard" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">Motherboard</h2>
              </div>
            </div>
          </Link>
          <Link href="/ram">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-photo/technician-repairing-circuit-board-with-multimeter-tool-generated-by-ai_188544-37249.jpg?t=st=1690628908~exp=1690632508~hmac=2d84af0ea201644cf2d8f8f0acefe7787cadb953f081622abf5a5bd0689c979e&w=1060" alt="RAM" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">RAM</h2>
              </div>
            </div>
          </Link>
          <Link href="/powerSupplyUnit">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/premium-photo/fiber-optic-cable-internet-connection-generative-ai_722401-466.jpg?w=996" alt="Power Supply Unit" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">Power Supply Unit</h2>
              </div>
            </div>
          </Link>
          <Link href="/storageDevice">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-photo/mainframe-devices-racks-room-with-big-data-cyber-internet-content-neon-light-cloud-computing-server-cabinet-modern-communication-storage-hardware-system_90220-1386.jpg?t=st=1690629025~exp=1690632625~hmac=75e24a2ca496bfab9ec58ac0e2247131a12b905601ed46238acf4427fce2da6f&w=996" alt="Storage Device" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">Storage Device</h2>
              </div>
            </div>
          </Link>
          <Link href="/monitor">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-photo/modern-office-equipment-blue-desk-generated-by-ai_188544-27062.jpg?t=st=1690629071~exp=1690632671~hmac=03595351af367b37aff5b71c89013dd46f590d671db87d3f5ec6764beacd9c7e&w=1060" alt="Monitor" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">Monitor</h2>
              </div>
            </div>
          </Link>
          <Link href="/others">
            <div className="card w-80 h-60 bg-base-100 shadow-xl image-full">
              <figure><img src="https://img.freepik.com/free-photo/steel-machinery-illuminates-workshop-indoors-with-creativity-generated-by-ai_188544-29933.jpg?t=st=1690629116~exp=1690632716~hmac=a32e97d6cf9e3e4388f27b43e4cbf90759f21c1186a53ffeffdc6e96e68bf0c5&w=1060" alt="others" /></figure>
              <div className="card-body justify-center items-center text-center">
                <h2 className="card-title text-3xl">Others</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();

    return {
      props: {
        data: data.data
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
}