import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { toggleState } from "@/recoil/atoms"

export const useScroll = () => {
  const setToggle = useSetRecoilState(toggleState);

  useEffect(() => {

    const onScroll = () => setToggle(false);

    window.addEventListener('scroll', onScroll);

  }, [])

}