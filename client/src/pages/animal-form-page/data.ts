const title = {
  edit: 'Atnaujinti gyvūną',
  create: 'Naujas gyvūnas',
};
const btnText = {
  edit: 'Atnaujinti',
  create: 'Sukurti',
};
const color = {
  edit: 'warning',
  create: 'primary',
} as const;
const colorMain = {
  edit: 'warning.main',
  create: 'primary.main',
} as const;

export const getModeData = (mode: 'create' | 'edit') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode],
});
