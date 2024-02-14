import Navbar from "../Navbar/Navbar";
import styles from "../TodoContainer/TodoContainer.module.css";
import { ReactComponent as Loading } from "../../svg/loading.svg";
import { ReactComponent as Error404 } from "../../svg/404-ghost.svg";

const NewList = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.ListTitle}>Coming Soon </h1>
          <Error404 />
          <div className={styles.loadingIcon}>
            <Loading height="150px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewList;
