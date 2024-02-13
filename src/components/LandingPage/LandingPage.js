import styles from "./LandingPage.module.css";
import { ReactComponent as Icon } from "../../svg/WTDicon.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className={styles.content}>
        <Icon className={styles.Logo} height="60px" />

        <h1 className={styles.title}>Write That Down</h1>
        <p>
          Write that down is a list building app for people who can't function
          without one. This app is built in React.js using create-react-app.
        </p>
        <div className={styles.Button}>
          <Link className={styles.ctaButt} to="/wtd-list">
            Let's go!
          </Link>
        </div>
      </div>
      <p className={styles.footer}>
        &copy;{new Date().getFullYear()} | Write That Down 
      </p>
    </>
  );
};

export default LandingPage;
