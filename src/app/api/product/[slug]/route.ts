import { type NextRequest, NextResponse } from "next/server"

import { Product } from "@/interfaces"
import { products } from "@/data"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse<Product | { message: string }>> {
  const slug = (await params).slug

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
