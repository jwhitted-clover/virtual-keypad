import Clover from 'remote-pay-cloud';
import { createSelector } from 'reselect';

export const selectConfiguration = state => state.configuration;

export const selectFriendlyId = createSelector(selectConfiguration, ({ friendlyId }) => friendlyId || 'Virtual Keypad');

export const selectManualCardEntry = createSelector(
  selectConfiguration,
  ({ manualCardEntry }) => manualCardEntry || false
);

export const selectCardEntryMethods = createSelector(selectManualCardEntry, manual =>
  manual
    ? // eslint-disable-next-line no-bitwise
      Clover.CardEntryMethods.DEFAULT | Clover.CardEntryMethods.CARD_ENTRY_METHOD_MANUAL
    : Clover.CardEntryMethods.DEFAULT
);

export const selectAutoConnect = createSelector(selectConfiguration, ({ autoConnect }) => autoConnect || false);

export const selectConfigurationLoading = createSelector(selectConfiguration, ({ loading }) => loading || false);
