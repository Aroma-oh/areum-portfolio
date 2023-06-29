import { useRef } from 'react';

export const useMoveToSection = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);
    const headerHeight = headerRef.current?.offsetHeight;

    if (sectionElement && headerHeight) {
      const sectionTop = sectionElement.getBoundingClientRect().top;
      window.scrollTo({ top: window.pageYOffset + sectionTop - headerHeight, behavior: 'smooth' }); // 네비 높이 구해서 63 대체하기
    }

  };

  return { handleMove, headerRef }
}