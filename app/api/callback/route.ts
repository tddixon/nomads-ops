
 
import { NextResponse, type NextRequest } from 'next/server'
 
export function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams
const code = searchParams.get('code')


console.log(searchParams)

return NextResponse.json({ code})
}