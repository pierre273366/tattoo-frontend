import styles from "../styles/accueil.module.css";

function Accueil() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.leftContainer}></div>

      <div className={styles.rightContainer}>
        <div></div>

        <h1 id={styles.h1}>Welcome!!!</h1>
      </div>
    </div>
  );
}

export default Accueil;
