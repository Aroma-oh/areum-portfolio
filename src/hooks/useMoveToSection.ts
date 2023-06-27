export const useMoveToSection = () => {

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const sectionTop = sectionElement.getBoundingClientRect().top;
      window.scrollTo({ top: window.pageYOffset + sectionTop - 63.999, behavior: 'smooth' });
    }

  };

  return { handleMove }
}