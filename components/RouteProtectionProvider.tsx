'use client';

import { useRouteProtection } from '@/hooks/use-route-protection';

export function RouteProtectionProvider() {
  useRouteProtection();
  return null;
}
