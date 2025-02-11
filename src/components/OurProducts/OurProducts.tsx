import Image from "next/image"

import { Product } from "@/interfaces"
import { api } from "@/lib/api"

export default async function OurProducts() {
  const products: Product[] = await api.get("products")

  return (
    <div className='px-4 py-16 sm:py-24 flex flex-col gap-4'>
      <h2 className='font-bold tracking-tight text-black text-2xl md:text-4xl'>
        Our Products
      </h2>

      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {products.map((product) => (
          <a
            key={product.id}
            href={`/product/${product.slug}`}
            className='group'
          >
            <Image
              src={product.imageSrc}
              width={356}
              height={356}
              alt={product.imageAlt}
              className='aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]'
            />
            <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>
              ${product.price}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
