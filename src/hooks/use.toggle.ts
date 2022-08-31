import { useCallback, useState } from 'react';

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((preV) => !preV), []);
  return [state, toggle];
};

export default useToggle;
