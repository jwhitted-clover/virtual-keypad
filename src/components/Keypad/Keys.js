import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
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
import { ACTION } from '../../common';

export default () => {
  const dispatch = useDispatch();
  const actions = useSelector(selectNonTransactionActions);
  const transactionAction = useSelector(selectTransactionAction);

  const [actionClicked, setActionClicked] = useState(false);
  const keysDisabled = useMemo(() => !transactionAction || actionClicked, [transactionAction, actionClicked]);

  const onAction = useCallback(
    async action => {
      setActionClicked(true);
      if (action.type === ACTION.INVOKE_INPUT_OPTION) setTimeout(() => setActionClicked(false), 250);
      await dispatch(ACTION_CREATOR[action.type](action));
    },
    [dispatch, setActionClicked]
  );

  const actionHandler = action => async () => onAction(action);

  useEffect(() => {
    if (actions.length) setActionClicked(false);
  }, [setActionClicked, actions]);

  const keyRef = useRef();
  const [keyHeight, setKeyHeight] = useState();
  useEffect(() => {
    if (keyRef.current) {
      setKeyHeight(keyRef.current.offsetWidth);
    }
  }, [keyRef, setKeyHeight]);

  const [action1, action2, ...moreActions] = actions;

  if (moreActions?.length) console.log(moreActions);

  return (
    <div className="Keys">
      <div className="row no-gutters">
        <div className="col-6 p-1">
          <Key
            action={action1 || {}}
            disabled={!action1 || actionClicked}
            keyCodes={['F1', 'NumpadDivide']}
            onClick={actionHandler(action1)}
          />
        </div>
        <div className="col-6 p-1">
          <Key
            action={action2 || {}}
            disabled={!action2 || actionClicked}
            keyCodes={['F2', 'NumpadMultiply']}
            onClick={actionHandler(action2)}
            moreActions={moreActions}
            onMoreClick={action => onAction(action)}
          />
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-3 p-1">
          <Key
            ref={keyRef}
            height={keyHeight}
            disabled={keysDisabled}
            keyCodes={['Numpad7', 'Digit7']}
            onClick={() => dispatch(appendBuffer('7'))}
          >
            7
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key disabled={keysDisabled} keyCodes={['Numpad8', 'Digit8']} onClick={() => dispatch(appendBuffer('8'))}>
            8
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key disabled={keysDisabled} keyCodes={['Numpad9', 'Digit9']} onClick={() => dispatch(appendBuffer('9'))}>
            9
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key
            color="danger"
            disabled={keysDisabled}
            keyCodes={['NumpadSubtract', 'Escape']}
            onClick={() => dispatch(resetBuffer())}
          >
            X
          </Key>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-3 p-1">
          <Key
            height={keyHeight}
            disabled={keysDisabled}
            keyCodes={['Numpad4', 'Digit4']}
            onClick={() => dispatch(appendBuffer('4'))}
          >
            4
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key disabled={keysDisabled} keyCodes={['Numpad5', 'Digit5']} onClick={() => dispatch(appendBuffer('5'))}>
            5
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key disabled={keysDisabled} keyCodes={['Numpad6', 'Digit6']} onClick={() => dispatch(appendBuffer('6'))}>
            6
          </Key>
        </div>
        <div className="col-3 p-1">
          <Key
            color="warning"
            disabled={keysDisabled}
            keyCodes={['NumpadAdd', 'Backspace', 'Delete']}
            onClick={() => dispatch(undoBuffer())}
          >
            &lt;
          </Key>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-9">
          <div className="row no-gutters">
            <div className="col-4 p-1">
              <Key
                height={keyHeight}
                disabled={keysDisabled}
                keyCodes={['Numpad1', 'Digit1']}
                onClick={() => dispatch(appendBuffer('1'))}
              >
                1
              </Key>
            </div>
            <div className="col-4 p-1">
              <Key disabled={keysDisabled} keyCodes={['Numpad2', 'Digit2']} onClick={() => dispatch(appendBuffer('2'))}>
                2
              </Key>
            </div>
            <div className="col-4 p-1">
              <Key disabled={keysDisabled} keyCodes={['Numpad3', 'Digit3']} onClick={() => dispatch(appendBuffer('3'))}>
                3
              </Key>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-8 p-1">
              <Key
                height={keyHeight}
                disabled={keysDisabled}
                keyCodes={['Numpad0', 'Digit0']}
                onClick={() => dispatch(appendBuffer('0'))}
              >
                0
              </Key>
            </div>
            <div className="col-4 p-1">
              <Key
                disabled={keysDisabled}
                keyCodes={['NumpadDecimal', 'Period']}
                onClick={() => dispatch(appendBuffer('00'))}
              >
                00
              </Key>
            </div>
          </div>
        </div>
        <div className="col-3 p-1">
          <Key
            color="success"
            disabled={keysDisabled}
            keyCodes={['NumpadEnter', 'Enter']}
            onClick={() => dispatch(transaction())}
          >
            O
          </Key>
        </div>
      </div>
    </div>
  );
};
