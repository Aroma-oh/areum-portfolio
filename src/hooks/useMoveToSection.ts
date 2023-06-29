import { useRef } from 'react';

export const useMoveToSection = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);
    const headerHeight = document.getElementById('Portfolio').offsetHeight
    console.log(headerHeight)

    if (sectionElement && headerHeight) {
      const sectionTop = sectionElement.getBoundingClientRect().top;
      window.scrollTo({ top: window.pageYOffset + sectionTop - headerHeight, behavior: 'smooth' });
    }

  };

  return { handleMove, headerRef }
}