import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { selectError, setError } from '../../store';
import Error from './Error';

export default () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const { addToast } = useToasts();

  useEffect(() => {
    if (error.message) {
      addToast(<Error error={error} />, {
        appearance: 'error',
        autoDismiss: true,
        onDismiss: () => {
          dispatch(setError());
        },
      });
    }
  }, [addToast, dispatch, error]);
};
