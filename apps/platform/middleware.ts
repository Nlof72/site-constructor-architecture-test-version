import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0];
  
  // Set SITE_ID based on subdomain
  let siteId = 'vpn-service-01'; // default
  
  if (subdomain === 'vpn' || subdomain === 'securevpn') {
    siteId = 'vpn-service-01';
  } else if (subdomain === 'saas' || subdomain === 'webtools') {
    siteId = 'saas-tools-01';
  } else if (subdomain === 'gaming' || subdomain === 'cs2' || subdomain === 'skins') {
    siteId = 'cs2-skins-01';
  }
  
  // Add site_id to search params for the page to use
  url.searchParams.set('site_id', siteId);
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
