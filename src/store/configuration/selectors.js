import { createSelector } from 'reselect';

export const selectConfiguration = state => state.configuration;

export const selectFriendlyId = createSelector(selectConfiguration, ({ friendlyId }) => friendlyId || 'Virtual Keypad');
