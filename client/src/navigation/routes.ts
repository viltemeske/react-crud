const singleAnimalPageRoot = '/animal/';

const staticRoutes = {
  HomePage: '/',
  AnimalFormPage: '/animal-form',
} as const;

const dynamicRoutes = {
  SingleAnimalPage: {
    path: `${singleAnimalPageRoot}:id`,
    createLink: (id: string | number) => `${singleAnimalPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
