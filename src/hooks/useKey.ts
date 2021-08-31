import React from 'react';

const useKey = (eventName: any, key: string, callback: (e: KeyboardEvent) => void) => {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  React.useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.code === key) {
        callbackRef.current(event);
      }
    };

    document.addEventListener(eventName, handle);

    return () => document.removeEventListener(eventName, handle);
  }, [key, eventName]);
}

export default useKey;