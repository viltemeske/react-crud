const singleAnimalPageRoot = '/animal/';

const routes = {
  HomePage: '/',
  AnimalFormPage: '/animal-form',
  SingleAnimalPage: {
    path: `${singleAnimalPageRoot}:id`,
    createLink: (id: string | number) => `${singleAnimalPageRoot}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
