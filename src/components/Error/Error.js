import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export default ({ error }) => {
  const { message, stack } = error;
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    document.querySelector('.react-toast-notifications__container').classList.add('expanded');
    setExpanded(true);
  };

  useEffect(() => {
    return () => {
      const remaining = document.querySelectorAll('.Error.expanded').length - (expanded ? 1 : 0);
      if (!remaining) {
        document.querySelector('.react-toast-notifications__container').classList.remove('expanded');
      }
    };
  }, [expanded]);

  return (
    <div className={classNames('Error', { expanded })}>
      <h5>{message}</h5>
      {!!stack && !expanded && (
        <button className="btn btn-link btn-sm" onClick={expand}>
          Show details...
        </button>
      )}
      {!!stack && expanded && (
        <pre className="mb-0">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
};
