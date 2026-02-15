'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';

const allowedAuthenticatedRoutes = [
  '/',
  '/setup',
  '/subscribe',
  '/subscribe/success',
  '/gallery',
  '/terms',
  '/privacy',
  '/refund',
  '/contact',
  '/about',
  '/pricing',
];

export function useRouteProtection() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('id')
          .eq('id', session.user.id)
          .maybeSingle();

        if (profile) {
          const isAllowedRoute = allowedAuthenticatedRoutes.some(route =>
            pathname === route || pathname.startsWith(route + '/')
          );

          if (!isAllowedRoute) {
            router.replace('/gallery');
          }
        }
      }
    };

    checkAccess();
  }, [pathname, router]);
}
