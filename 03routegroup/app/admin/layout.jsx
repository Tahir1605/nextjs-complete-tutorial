import AdminNav from '@/app/components/AdminNav';
import '../globals.css';
const AdminLayout = ({children}) => {
    return(
        <html>
            <head>
                <title>
                    Tahir admin
                </title>
            </head>
            <body className='bg-slate-900 text-white font-serif'>
                <AdminNav/>
                {children}
            </body>
        </html>
    )
}

export default AdminLayout