import { useRecoilValue } from "recoil";
import { headerHeightState } from "@/recoil/atoms";

export const useMoveToSection = () => {
  const headerHeight = useRecoilValue(headerHeightState);

  const handleMove = (sectionId: string) => {

    const sectionElement = document.getElementById(sectionId);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;

    window.scrollTo({
      top: window.scrollY + sectionTop - headerHeight,
      behavior: 'smooth'
    });

  };

  return { handleMove }
}