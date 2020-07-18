import { useState } from 'react';

export default function useToggle(
  initialValue: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
