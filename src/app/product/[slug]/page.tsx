import { notFound } from "next/navigation"
import Image from "next/image"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Product } from "@/interfaces"
import { api } from "@/lib/api"

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const product: Product = await api.get(`product/${slug}`)

  if (!product) {
    notFound()
  }

  return (
    <main className='py-8 flex-1 flex flex-col items-center justify-center'>
      <MaxWidthWrapper>
        <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-12 lg:gap-x-8 px-4'>
          <div className='md:col-span-6 relative h-full min-h-96'>
            <Image
              src={product.imageSrc}
              priority
              fill
              style={{
                objectFit: "cover"
              }}
              className='rounded-lg'
              alt={product.imageAlt}
            />
          </div>
          <div className='md:col-span-6 flex flex-col gap-6'>
            <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
              {product.name}
            </h2>

            <p className='text-2xl text-gray-900'>${product.price}</p>

            <p className='text-xl text-gray-700 pr-2'>{product.description}</p>

            <button
              type='button'
              className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-12 py-3 font-medium text-white text-lg hover:bg-indigo-700'
            >
              Add to cart
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}

export async function generateStaticParams() {
  const products: Product[] = await api.get("products")

  return products.map((product) => ({
    slug: product.slug
  }))
}
