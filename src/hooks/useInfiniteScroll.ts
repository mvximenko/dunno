import { useEffect, useCallback } from 'react';

export default function useInfiniteScroll(
  scrollRef: React.RefObject<HTMLDivElement>,
  dispatch: () => void
) {
  const scrollObserver = useCallback(
    (node: HTMLDivElement) => {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
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
