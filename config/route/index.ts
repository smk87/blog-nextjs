type Route = {
    roles: string[];
    fallBackUrl?: string;
    public?: boolean;
};

type RouteConfig = {
    [key: string]: Route;
};

export const routeConfig: Readonly<RouteConfig> = {
    '/': {
        roles: ['admin', 'editor'],
        fallBackUrl: '/',
    },
    '/about': {
        roles: ['admin'],
        fallBackUrl: '/',
    },
    '/posts/[slug]': {
        roles: ['editor'],
        fallBackUrl: '/',
    },
    '/404': {
        public: true,
        roles: [],
    },
};
