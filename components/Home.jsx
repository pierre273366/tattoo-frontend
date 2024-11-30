import styles from "../styles/home.module.css";
import Signin from "./Signin";
import Signup from "./Signup";

function Home() {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.leftContainer}>
        <img className={styles.tattoo} src="tattoo.jpg"></img>
      </div>

      <div className={styles.rightContainer}>
        <div></div>

        <h1 id={styles.h1}>Tattoo Studio</h1>

        <h2 id={styles.h2}>Join The Community.</h2>

        <Signup />

        <p id={styles.p}>Already Have an account ?</p>

        <Signin />
      </div>
    </div>
  );
}

export default Home;
