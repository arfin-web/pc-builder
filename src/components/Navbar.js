import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    console.log(session?.user);
    return (
        <>
            <div className="hidden lg:block">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link href="/">
                            <img src="/logo.png" className="w-16" alt="logo" />
                        </Link>
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
                            {
                                session?.user && <li>
                                    <Link href="/pcbuilder" className="btn btn-primary text-lg">Pc Builder</Link>
                                </li>
                            }
                        </ul>
                        {
                            session?.user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={session?.user?.image} />
                                    </div>
                                </label>
                                <                       ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {session?.user?.name}
                                        </a>
                                    </li>
                                    <li><a>{session?.user?.email}</a></li>
                                    <li><button onClick={() => signOut()} className="btn btn-sm btn-ghost">Logout</button></li>
                                </ul>
                            </div>
                                : <button onClick={() => signIn("github", { callbackUrl: "https://pc-builder-delta.vercel.app", })} className="btn btn-secondary text-lg">Sign In</button>
                        }
                    </div>
                </div>
            </div>

            <div className="navbar bg-base-100 lg:hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link href="/products" className="text-base">Products</Link>
                            </li>
                            <li>
                                <details>
                                    <summary className="text-base">
                                        Categories
                                    </summary>
                                    <ul className="p-2 bg-base-100">
                                        <li>
                                            <Link href="/cpu" className="text-base">Cpu</Link>
                                        </li>
                                        <li>
                                            <Link href="/motherboard" className="text-base">Motherboard</Link>
                                        </li>
                                        <li>
                                            <Link href="/ram" className="text-base">Ram</Link>
                                        </li>
                                        <li>
                                            <Link href="/powerSupplyUnit" className="text-base">Power Supply Unit</Link>
                                        </li>
                                        <li>
                                            <Link href="/storageDevice" className="text-base">Storage Device</Link>
                                        </li>
                                        <li>
                                            <Link href="/monitor" className="text-base">Monitor</Link>
                                        </li>
                                        <li>
                                            <Link href="/others" className="text-base">Others</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            {
                                session?.user && <li>
                                    <Link href="/pcbuilder" className="btn btn-primary text-base">Pc Builder</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href="/">
                        <img src="/logo.png" className="w-16" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-end">
                    {
                        session?.user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={session?.user?.image} />
                                </div>
                            </label>
                            <                       ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {session?.user?.name}
                                    </a>
                                </li>
                                <li><a>{session?.user?.email}</a></li>
                                <li><button onClick={() => signOut()} className="btn btn-sm btn-ghost">Logout</button></li>
                            </ul>
                        </div>
                            : <button onClick={() => signIn("github", { callbackUrl: "https://pc-builder-delta.vercel.app", })} className="btn btn-secondary text-base">Sign In</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar