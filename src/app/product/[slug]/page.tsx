import { Product } from "@/interfaces"
import { api } from "@/lib/api"

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const product: Product = await api.get(`product/${slug}`)

  return <div>My Post: {product.name}</div>
}

export async function generateStaticParams() {
  const products: Product[] = await api.get("products")

  return products.map((product) => ({
    slug: product.slug
  }))
}
