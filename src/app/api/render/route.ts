import { NextResponse } from "next/server"

export async function GET(request: Request) {
  console.log('received a request!')

  return NextResponse.json({ msg: 'hello' })
}
