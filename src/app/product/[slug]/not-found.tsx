import Link from "next/link"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export default function NotFound() {
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-bold tracking-tight text-black text-center sm:text-5xl md:text-6xl'>
            Not Found
          </h2>
          <p className='text-xl text-gray-500 text-center'>
            Could not find requested product
          </p>
          <Link
            href='/'
            className='text-lg text-gray-500 text-center underline'
          >
            Return Home
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
