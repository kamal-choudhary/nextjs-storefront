import { type NextRequest, NextResponse } from "next/server"

import { Product } from "@/interfaces"
import { products } from "@/data"

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse<Product | { message: string }>> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
