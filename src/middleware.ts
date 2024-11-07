import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export const config = {
  matcher: [
    '/login/:path*',
    '/signup/:path*',
  ]
}

export function middleware(request: NextRequest) {
  const cookiespayment = cookies()
  const accessToken = cookiespayment.get('accessToken')?.value
  const response = NextResponse.next();
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  if(accessToken){
    return NextResponse.redirect(new URL('/register', request.url))
  }

  return response;

}
 
