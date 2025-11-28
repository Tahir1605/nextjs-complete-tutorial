import "./globals.css";

export default function RootLayout({children}){
  return(
    <html>
      <head>
        <title>
          Video handling
        </title>
      </head>
      <body className="bg-slate-950 text-white font-serif font-semibold">
        {children}
      </body>
    </html>
  )
}
