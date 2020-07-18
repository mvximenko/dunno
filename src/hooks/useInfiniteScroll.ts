import { useEffect, useCallback } from 'react';
import { ADVANCE_PAGE, AdvancePageAction } from '../store/list/listTypes';

export default function useInfiniteScroll(
  scrollRef: React.RefObject<HTMLDivElement>,
  dispatch: React.Dispatch<AdvancePageAction>
): void {
  const scrollObserver = useCallback(
    (node: HTMLDivElement) => {
      new IntersectionObserver((entries): void => {
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
