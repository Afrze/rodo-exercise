import Header from "../Header/Header";
import styles from "./LayoutContainer.module.css";

function LayoutContainer(props: any) {
  return (
    <div className={styles.head}>
      <p>Layout</p>
      <Header />
      <div className={styles.wrap}>{props.children}</div>
    </div>
  );
}

export default LayoutContainer;
