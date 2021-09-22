import { useEffect, useCallback, useRef } from 'react';

export default function useLazyLoading(imgSelector: string, items: object[]) {
  const imgObserver = useCallback((node: HTMLImageElement) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const currentImg = entry.target as HTMLImageElement;
          const newImgSrc = currentImg.dataset.src;

          // swap if new url exists
          if (!newImgSrc) {
            console.error('Image source is invalid');
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const imagesRef = useRef<NodeListOf<HTMLImageElement> | null>(null);

  useEffect(() => {
    imagesRef.current = document.querySelectorAll(imgSelector);

    if (imagesRef.current) {
      imagesRef.current.forEach((img) => imgObserver(img));
    }
  }, [imgObserver, imagesRef, imgSelector, items]);
}
