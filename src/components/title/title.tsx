"use client";
import { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './title.module.css'; // Ensure CSS is correctly imported

export default function Title() {
  const [currentWord, setCurrentWord] = useState("الإبـــــــداع");

  useEffect(() => {
    const words = ["الإبتـــــــكار", "التـميُّـــــــــز", "المستقبل"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentWord(words[currentIndex]);
      currentIndex = (currentIndex + 1) % words.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="align-right text-[80px] font-semibold leading-[120px] text-white">
      <span className={styles.staticText}>قفزة نحو{' '}</span> 
      <span className={styles.customUnderline}>
        <SwitchTransition>
          <CSSTransition
            key={currentWord}
            timeout={500}
            classNames={{
              enter: styles.wordEnter,
              enterActive: styles.wordEnterActive,
              exit: styles.wordExit,
              exitActive: styles.wordExitActive,
            }}
          >
            <span className={styles.word}>{currentWord}</span>
          </CSSTransition>
        </SwitchTransition>
      </span>
    </span>
  );
}
