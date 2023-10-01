import React, { useEffect, useRef, useState } from 'react'

//style
import './LetterCard.css'
import useOnScreen from '../../Hocks/useOnScreen';

interface Props{
    texto: string
}

export const LetterCard = ({texto}:Props) => {
  const [y, setY] = useState(0);
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const orientation = () => {
    return isVisible ?  "-" : ""
  }

  // const handleNavigation = (e:any) => {
  //   const window = e.currentTarget;
  //   if (y > window.scrollY) {
  //   } else if (y < window.scrollY) {
  //   }
  //   setY(window.scrollY);
  // };

  // useEffect(() => {
  //   setY(window.scrollY);

  //   window.addEventListener("scroll", (e) => handleNavigation(e));
  // }, []);

  return (
    <div ref={ref} className={texto==="" ? "LetterCard " : "LetterCard LetterCardShadow"} style={{border:texto==="" ? "" : "1px solid var(--primary)", rotate:`${orientation()}${randomNumber}deg`}}>
        {texto}
    </div>
  )
}
