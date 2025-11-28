import "./globals.css";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight:'400',
  subsets : ["latin"],
  style:'italic', // or style can be 'normal'
  display:'swap',
  preload:true
})

const RootLayout = ({children}) => {
  return(
    <html lang="en" className={roboto.className}>
      <head>
        <title>
          Font optimization
        </title>
      </head>
      <body className="bg-slate-950 text-white font-semibold">
        {children}
      </body>
    </html>
  )
}

export default RootLayout