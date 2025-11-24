import Navbar from "../components/Navbar";
import "./globals.css";

const RootLayout = ({children}) =>{
  return(
    <html>
      <head>
        <title>
          Tahirul islam
        </title>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
