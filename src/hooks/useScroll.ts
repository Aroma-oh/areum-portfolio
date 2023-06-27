import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState } from "@/recoil/atoms"

export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState)

  const sectionRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    let targetY = sectionRef.current?.getBoundingClientRect().y

    if (targetY && targetY < 60) setIsColorNav(true)
    else setIsColorNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { sectionRef }
}