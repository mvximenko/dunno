import { useState, useEffect } from 'react';

export default function useLoaded(
  backdropPath: string | null
): [boolean, () => void] {
  const [state, setState] = useState(false);
  const loaded = () => {
    setState(true);
  };

  useEffect(() => {
    if (state) setState(false);
  }, [backdropPath]);

  return [state, loaded];
}
