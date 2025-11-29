import "./globals.css";

const RootLayout = ({children}) => {
  return(
    
    <html>
      <head>
        <title>
          Dynamic route
        </title>
      </head>
      <body className='bg-slate-950 text-white font-semibold'>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
