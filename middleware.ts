import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          req.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          req.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: req.headers,
            },
          });
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = req.nextUrl.pathname;

  // Allow public routes always
  const publicRoutes = [
    '/',
    '/terms',
    '/privacy',
    '/refund',
    '/contact',
    '/about',
    '/pricing',
  ];

  // Routes that authenticated users with completed setup can access
  const allowedAuthenticatedRoutes = [
    '/',
    '/setup',
    '/start',
    '/start/success',
    '/gallery',
    '/terms',
    '/privacy',
    '/refund',
    '/contact',
    '/about',
    '/pricing',
  ];

  // Allow access to API routes and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return response;
  }

  // If user is authenticated, check if they have completed setup
  if (session?.user) {
    // Check if user has a profile (completed setup)
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('id', session.user.id)
      .maybeSingle();

    // If user has completed setup (has a profile)
    if (profile) {
      // Check if they're trying to access a restricted page
      const isAllowedRoute = allowedAuthenticatedRoutes.some(route =>
        pathname === route || pathname.startsWith(route + '/')
      );

      // Redirect to gallery if accessing restricted page
      if (!isAllowedRoute) {
        const redirectUrl = new URL('/gallery', req.url);
        return NextResponse.redirect(redirectUrl);
      }
    }
    // If user is authenticated but hasn't completed setup, allow all routes
    // This allows them to complete onboarding flow
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
