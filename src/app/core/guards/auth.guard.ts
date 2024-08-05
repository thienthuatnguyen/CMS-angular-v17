import { inject } from '@angular/core';
import { SessionService } from '../session.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const isAuthenticatedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);
  const deniedMessage = '[Guard] - Auth Guard - Unauthorized, access denied';

  if (sessionService.isLoggedIn) {
    console.log(`[Guard] - Auth Guard - allowed`);
    return true;
  }

  const url = `/signin?redirectTo=${state.url}`;
  const urlTree = router.parseUrl(url);
  router.navigateByUrl(urlTree);
  console.warn(deniedMessage);
  return false;
};

