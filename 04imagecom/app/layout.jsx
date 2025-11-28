import "./globals.css";

const RootLayout = ({children}) => {
  return(
    <html>
      <head>
        <title>
          Image component
        </title>
      </head>
      <body className="bg-slate-950 text-white font-serif">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
