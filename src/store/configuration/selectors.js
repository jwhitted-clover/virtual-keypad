import { createSelector } from 'reselect';

export const selectConfiguration = state => state.configuration;

export const selectFriendlyId = createSelector(selectConfiguration, ({ friendlyId }) => friendlyId || 'Virtual Keypad');

export const selectAutoConnect = createSelector(selectConfiguration, ({ autoConnect }) => autoConnect || false);
