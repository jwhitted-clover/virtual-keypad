export const ACTION = {
  ACCEPT_PAYMENT: 'ACCEPT_PAYMENT',
  ACCEPT_SIGNATURE: 'ACCEPT_SIGNATURE',
  DISCONNECT: 'DISCONNECT',
  IDENTIFY: 'IDENTIFY',
  INVOKE_INPUT_OPTION: 'INVOKE_INPUT_OPTION',
  REJECT_PAYMENT: 'REJECT_PAYMENT',
  REJECT_SIGNATURE: 'REJECT_SIGNATURE',
  RESET: 'RESET',
  SHOW_WELCOME: 'SHOW_WELCOME',
  TRANSACTION: 'TRANSACTION',
};

export const APP = {
  CLOUD_PAY_DISPLAY: 'CLOUD_PAY_DISPLAY',
};

export const APP_NAME = {
  [APP.CLOUD_PAY_DISPLAY]: 'Cloud Pay Display',
};

export const APP_BY_NAME = Object.fromEntries(Object.entries(APP_NAME).map(arr => arr.reverse()));

export const REMOTE_APPLICATION_ID = 'virtual-keypad';

export const STORAGE = 'clover/virtual-keypad';

export const TRANSACTION = {
  SALE: 'SALE',
  REFUND: 'REFUND',
};
