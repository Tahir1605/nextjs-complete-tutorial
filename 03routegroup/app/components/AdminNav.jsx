import Link from "next/link"
const AdminNav = () => {
    return(
        <div className="flex justify-between px-5 py-2.5 bg-slate-950">
            <div className="text-2xl font-bold">
                Admin
            </div>
            <ul className="flex gap-5">
                <li><Link href="/admin">Home</Link></li>
                <li><Link href="/admin/settings">Settings</Link></li>
                <li><Link href="/admin/blogers">Blogers</Link></li>
            </ul>
        </div>
    )
}

export default AdminNav