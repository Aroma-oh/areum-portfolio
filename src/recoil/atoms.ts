import { atom } from 'recoil';

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

export const viewSectionState = atom({
  key: 'viewSectionState',
  default: 'intro',
})