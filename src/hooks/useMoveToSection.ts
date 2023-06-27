import { useRef } from 'react';

export const useMoveToSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  ///useRf 활용으로 바꾸면 더 좋을 듯
  const handleMove = (sectionId: string) => {
    const sectionTop = sectionRef.current?.getBoundingClientRect().y;
    if (sectionTop) {
      top: sectionTop;
      window.scrollTo({ behavior: 'smooth' });
    }
  }

  return { sectionRef, handleMove }
}