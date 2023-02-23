const singleAnimalPageRoot = '/animal/';
const updateAnimalPageRoot = '/update-animal/';

const staticRoutes = {
  HomePage: '/',
  AnimalFormPage: '/animal-form',
} as const;

const dynamicRoutes = {
  SingleAnimalPage: {
    path: `${singleAnimalPageRoot}:id`,
    createLink: (id: string | number) => `${singleAnimalPageRoot}${id}`,
  },
  UpdateAnimalPage: {
    path: `${updateAnimalPageRoot}:id`,
    createLink: (id: string | number) => `${updateAnimalPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

// export type Routes = typeof routes;
// export type RouteLink = {
//   [Key in keyof Routes]: Routes[Key] extends string ? Routes[Key] : never
// }[keyof Routes]; - alternatyvus sprendimas

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
