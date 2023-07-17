import { atom } from 'recoil';

export const isColorNavState = atom({
  key: 'isColorNavState',
  default: false,
});

export const selectMenuState = atom({
  key: 'selectMenuState',
  default: '',
});

export const toggleState = atom({
  key: 'toggleState',
  default: false,
});

export const headerHeightState = atom({
  key: 'headerHeightState',
  default: 0,
});

export const isHorizontalState = atom({
  key: 'isHorizontalState',
  default: true,
});

export const selectProject = atom({
  key: 'selectProject',
  default: 0,
});