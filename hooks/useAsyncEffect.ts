import * as React from 'react';

function useAsyncEffect(
  effect: (isCanceled: () => boolean) => Promise<void>,
  dependencies?: any[],
) {
  return React.useEffect(() => {
    let canceled = false;

    effect(() => canceled);

    return () => {
      canceled = true;
    };
  }, dependencies);
}

export default useAsyncEffect;
