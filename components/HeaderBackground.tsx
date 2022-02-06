import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

function HeaderBackground() {
  return <img className={styles.headerBackground} src="/headerBackground.png" />;
}

export default HeaderBackground;
