import Image from "next/image"

export default function Home() {
  return (

    <>
      <div className="h-[1000px] bg-slate-800 z-10"></div>

      <div className="flex justify-center items-center h-[400px] relative">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  h-screen w-full bg-slate-900 rounded-md -z-20">
          <Image
            src="/nature.jpg"
            fill
            alt="nature image"
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div className="h-[1000px] bg-slate-800 z-10"></div>

    </>
  )
}
