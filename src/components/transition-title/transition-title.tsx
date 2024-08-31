"use client";
import { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './transition-title.module.css';

const words = [
  'الإبـــــــداع',
  'الإبتـــــــكار',
  'التـميُّـــــــــز',
  'المستقبل',
];

export default function TransitionTitle() {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <span className="align-right text-4xl font-semibold leading-[120px] text-white sm:text-6xl md:text-7xl lg:text-[80px]">
      <span className={styles.staticText}>قفزة نحو </span>
      <span className={`${styles.customUnderline} ${styles.wordContainer}`}>
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
