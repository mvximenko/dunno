import { useEffect, useCallback } from 'react';

export default function useInfiniteScroll(
  scrollRef: React.RefObject<HTMLDivElement>,
  dispatch: () => void
): void {
  const scrollObserver = useCallback(
    (node: HTMLDivElement) => {
      new IntersectionObserver((entries): void => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            console.log('NEW PAGE');
            dispatch();
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
