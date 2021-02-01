import { useState, useEffect } from 'react';

export default function useLoaded(
  backdropPath: string | null
): [boolean, () => void] {
  const [state, setState] = useState(false);
  const loaded = () => setState(true);

  useEffect(() => {
    if (state) setState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdropPath]);

  return [state, loaded];
}
