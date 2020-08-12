export const APP = {
  CLOUD_PAY_DISPLAY: 'CLOUD_PAY_DISPLAY',
};

export const APP_NAME = {
  [APP.CLOUD_PAY_DISPLAY]: 'Cloud Pay Display',
};

export const APP_BY_NAME = Object.fromEntries(Object.entries(APP_NAME).map(arr => arr.reverse()));

export const REMOTE_APPLICATION_ID = 'virtual-keypad';

export const STORAGE = 'clover/virtual-keypad';
