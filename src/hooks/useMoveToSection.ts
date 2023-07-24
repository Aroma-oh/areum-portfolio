export const useMoveToSection = () => {

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;

    window.scrollTo({
      top: window.scrollY + sectionTop,
      behavior: 'smooth'
    });

  };

  return { handleMove };
}