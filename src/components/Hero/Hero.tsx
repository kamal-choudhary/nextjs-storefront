import Image from "next/image"

export default function Hero() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='relative h-[75vh] sm:h-[50vh] w-full'>
        <Image
          priority
          src='https://maildroppa.com/assets/svg/home-desktop-bg.svg'
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "0"
          }}
          alt='Hero Image'
        />
        <div className='relative mx-auto flex flex-col items-center justify-center gap-4 h-full md:max-w-[80%]'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>
            Vercel Store
          </h1>
          <p className='mx-12 text-xl text-gray-200 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div>
            <a
              href='#'
              className='inline-block rounded-md border border-transparent bg-indigo-600 px-12 py-2 font-medium text-white hover:bg-indigo-700'
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
