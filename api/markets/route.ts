import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      market: "H100 Futures",
      price: "$2.14/hr",
      change: "+4.2%"
    },
    {
      market: "Inference Credits",
      price: "$0.003/token",
      change: "-1.1%"
    }
  ]);
}
