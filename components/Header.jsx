import React from "react";
import styles from "../styles/header.module.css";

const menu = () => {
  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
        <img src="logotattoo.png" alt="logo studio" />
      </div>
      <nav className={styles.listul}>
        <ul className={styles.listul}>
          <li>
            <a className={styles.lista} href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a className={styles.lista} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={styles.lista} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={styles.lista} href="#gallery">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default menu;
