import { useRef } from 'react';

export const useMoveToSection = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);
    const headerHeight = document.getElementById('Header');

    if (sectionElement && headerHeight) {
      const sectionTop = sectionElement.getBoundingClientRect().top;
      window.scrollTo({ top: window.pageYOffset + sectionTop - headerHeight.offsetHeight, behavior: 'smooth' });
    }

  };

  return { handleMove, headerRef }
}