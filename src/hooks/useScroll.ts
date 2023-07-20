import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState, toggleState } from "@/recoil/atoms"


export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState);
  const setToggle = useSetRecoilState(toggleState);

  useEffect(() => {

    const onScroll = () => {
      const scrollY = window.scrollY;
      setToggle(false);

      if (scrollY > (window.innerHeight - 85)) {
        return setIsColorNav(true);
      }

      setIsColorNav(false);
    }

    window.addEventListener('scroll', onScroll);

  }, [])

}