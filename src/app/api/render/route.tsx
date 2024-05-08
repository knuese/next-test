import { NextResponse } from "next/server"

import TestComponent from "@/app/_components/TestComponent"

export async function GET(request: Request) {
  const ReactDOMServer = require('react-dom/server')
  const html = ReactDOMServer.renderToString(<TestComponent />)

  return NextResponse.json({ html })
}
