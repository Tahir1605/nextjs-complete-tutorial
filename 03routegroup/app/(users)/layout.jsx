import Navbar from "../components/Navbar";
import "../globals.css";

const UsersLayout = ({children}) => {
  return(
    <html>
      <head>
        <title>
          Tahir user
        </title>
      </head>
      <body className="bg-slate-900 text-white font-serif">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default UsersLayout