import Navbar from "./Navbar/Navbar";
import styles from "./TodoContainer/TodoContainer.module.css";
import { ReactComponent as Loading } from "../svg/loading.svg";

const NewList = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.App}>
          <h1 className={styles.ListTitle}>Coming Soon </h1>
          <div className={styles.loadingIcon}>
            <Loading height="150px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewList;
