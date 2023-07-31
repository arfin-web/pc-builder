import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    console.log(session?.user);
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
                        {
                            session?.user && <li>
                                <Link href="/pcbuilder" className="btn btn-primary text-lg">Pc Builder</Link>
                            </li>
                        }
                    </ul>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={session?.user?.image} />
                            </div>
                        </label>
                        {
                            session?.user ? <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {session?.user?.name}
                                    </a>
                                </li>
                                <li><a>{session?.user?.email}</a></li>
                                <li><button onClick={() => signOut()} className="btn btn-sm btn-ghost">Logout</button></li>
                            </ul>
                                : <button onClick={() => signIn("github", { callbackUrl: "https://pc-builder-delta.vercel.app", })} className="btn btn-primary text-lg">Sign In</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar