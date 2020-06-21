import { useEffect, useCallback } from 'react';
import { ADVANCE_PAGE } from '../types';

function useInfiniteScroll(scrollRef: any, dispatch: any): void {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: ADVANCE_PAGE });
            console.log('NEW PAGE');
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

export default useInfiniteScroll;
