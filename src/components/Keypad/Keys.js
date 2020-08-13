import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTransactionAction,
  selectNonTransactionActions,
  appendBuffer,
  resetBuffer,
  undoBuffer,
  transaction,
} from '../../store';
import Key from './Key';
import { ACTION_CREATOR } from './constants';

export default () => {
  const dispatch = useDispatch();
  const actions = useSelector(selectNonTransactionActions);
  const transactionAction = useSelector(selectTransactionAction);

  const [actionClicked, setActionClicked] = useState(false);
  const keysDisabled = useMemo(() => !transactionAction || actionClicked, [transactionAction, actionClicked]);

  const actionHandler = useCallback(
    action => async () => {
      setActionClicked(true);
      await dispatch(ACTION_CREATOR[action.type](action));
    },
    [dispatch, setActionClicked]
  );

  useEffect(() => {
    if (actions.length) setActionClicked(false);
  }, [setActionClicked, actions]);

  const [action1, action2, ...moreActions] = actions;

  return (
    <table className="Keys">
      <thead>
        <tr>
          <td colSpan="2">
            <Key
              action={action1}
              disabled={!action1 || actionClicked}
              keyCodes={['F1', 'NumpadDivide']}
              onClick={actionHandler(action1)}
            />
          </td>
          <td colSpan="2">
            <Key
              action={action2}
              disabled={!action2 || actionClicked}
              keyCodes={['F2', 'NumpadMultiply']}
              onClick={actionHandler(action2)}
              moreActions={moreActions}
            />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad7', 'Digit7']} onClick={() => dispatch(appendBuffer('7'))}>
              7
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad8', 'Digit8']} onClick={() => dispatch(appendBuffer('8'))}>
              8
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad9', 'Digit9']} onClick={() => dispatch(appendBuffer('9'))}>
              9
            </Key>
          </td>
          <td>
            <Key
              color="danger"
              disabled={keysDisabled}
              keyCodes={['NumpadSubtract', 'Escape']}
              onClick={() => dispatch(resetBuffer())}
            >
              X
            </Key>
          </td>
        </tr>
        <tr>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad4', 'Digit4']} onClick={() => dispatch(appendBuffer('4'))}>
              4
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad5', 'Digit5']} onClick={() => dispatch(appendBuffer('5'))}>
              5
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad6', 'Digit6']} onClick={() => dispatch(appendBuffer('6'))}>
              6
            </Key>
          </td>
          <td>
            <Key
              color="warning"
              disabled={keysDisabled}
              keyCodes={['NumpadAdd', 'Backspace', 'Delete']}
              onClick={() => dispatch(undoBuffer())}
            >
              &lt;
            </Key>
          </td>
        </tr>
        <tr>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad1', 'Digit1']} onClick={() => dispatch(appendBuffer('1'))}>
              1
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad2', 'Digit2']} onClick={() => dispatch(appendBuffer('2'))}>
              2
            </Key>
          </td>
          <td>
            <Key disabled={keysDisabled} keyCodes={['Numpad3', 'Digit3']} onClick={() => dispatch(appendBuffer('3'))}>
              3
            </Key>
          </td>
          <td rowSpan="2">
            <Key
              color="success"
              disabled={keysDisabled}
              keyCodes={['NumpadEnter', 'Enter']}
              onClick={() => dispatch(transaction())}
            >
              O
            </Key>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <Key disabled={keysDisabled} keyCodes={['Numpad0', 'Digit0']} onClick={() => dispatch(appendBuffer('0'))}>
              0
            </Key>
          </td>
          <td>
            <Key
              disabled={keysDisabled}
              keyCodes={['NumpadDecimal', 'Period']}
              onClick={() => dispatch(appendBuffer('00'))}
            >
              00
            </Key>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
