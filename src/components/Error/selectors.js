import { createSelector } from 'reselect';

import { selectError } from '../../store';

export const selectVisible = createSelector(selectError, error => !!error.message);
