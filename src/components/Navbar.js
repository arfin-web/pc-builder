import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">PC Builder</Link>
                </div>
                <div className="flex-none gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/products" className="text-lg">Products</Link>
                        </li>
                        <li>
                            <details>
                                <summary className="text-lg">
                                    Categories
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <Link href="/cpu" className="text-lg">Cpu</Link>
                                    </li>
                                    <li>
                                        <Link href="/motherboard" className="text-lg">Motherboard</Link>
                                    </li>
                                    <li>
                                        <Link href="/ram" className="text-lg">Ram</Link>
                                    </li>
                                    <li>
                                        <Link href="/powerSupplyUnit" className="text-lg">Power Supply Unit</Link>
                                    </li>
                                    <li>
                                        <Link href="/storageDevice" className="text-lg">Storage Device</Link>
                                    </li>
                                    <li>
                                        <Link href="/monitor" className="text-lg">Monitor</Link>
                                    </li>
                                    <li>
                                        <Link href="/others" className="text-lg">Others</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.freepik.com/free-photo/close-up-young-offended-attractive-boy-blank-t-shirt-stands-pink-background-looks-sad-unhappy_295783-3317.jpg?w=996&t=st=1690547158~exp=1690547758~hmac=d8f5582165f9b25e0f78d6f84d19af8c2958f66e6ba163cb29ec3b6d751f8d96" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar