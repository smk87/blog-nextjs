import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { routeConfig } from '../config/route';

interface User {
    isLoggedIn: boolean;
    roles: string[];
}

export const useAuth = (user: User) => {
    const { pathname, replace } = useRouter();

    useEffect(() => {
        // Check if route exist in the config
        if (routeConfig[pathname]) {
            const route = routeConfig[pathname];
            const routeRoles = route.roles;

            if (route.public) {
                return; // No need for Authentication
            }

            // Check for Authentication
            if (user.isLoggedIn) {
                // Check for Authorization
                const canAccess =
                    routeRoles.length === 0
                        ? true
                        : routeRoles.some((role) => {
                              if (user.roles.includes(role)) {
                                  return true;
                              }
                          });

                if (!canAccess) {
                    replace(route.fallBackUrl || '/');
                }
            } else {
                replace('/');
            }
        } else {
            replace('/404');
        }
    }, [pathname, replace, user.isLoggedIn, user.roles]);
};
