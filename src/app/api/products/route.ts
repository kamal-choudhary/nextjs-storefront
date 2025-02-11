import { NextResponse } from "next/server"

import { Product } from "@/interfaces"
import { products } from "@/data"

export async function GET(): Promise<NextResponse<Product[]>> {
  return NextResponse.json(products)
}
