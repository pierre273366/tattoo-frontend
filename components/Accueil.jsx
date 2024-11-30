import styles from "../styles/accueil.module.css";

function Accueil() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.leftContainer}></div>

      <div className={styles.rightContainer}>
        <div></div>

        <h1 id={styles.h1}>Bienvenue au Tattoo Studio</h1>
        <p>Découvrez l'art du tatouage</p>
        <video width="450" height="500" controls>
          <source src="tattoovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Accueil;
