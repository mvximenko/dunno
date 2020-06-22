import { useEffect, useCallback, useRef } from 'react';

function useLazyLoading(imgSelector: string, items: object[]): void {
  const imgObserver = useCallback((node: HTMLImageElement): void => {
    const intObs = new IntersectionObserver((entries: any): void => {
      entries.forEach(
        (en: { intersectionRatio: number; target: HTMLImageElement }): void => {
          if (en.intersectionRatio > 0) {
            const currentImg = en.target;
            const newImgSrc = currentImg.dataset.src;

            // only swap out the image source if the new url exists
            if (!newImgSrc) {
              console.error('Image source is invalid');
            } else {
              currentImg.src = newImgSrc;
            }
            intObs.unobserve(node);
          }
        }
      );
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

export default useLazyLoading;
