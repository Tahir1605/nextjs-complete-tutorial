import Link from "next/link"

const Navbar = () => {
    return(
        <div className="flex justify-between px-5 py-2.5 bg-slate-950">
            <div className="text-2xl font-bold">
                User
            </div>
            <ul className="flex gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/product">Product</Link></li>
            </ul>
        </div>
    )
}

export default Navbar