import React, { useContext } from "react";
import DataContext from "../../store/data-context";
import styles from "./CustomButton.module.css";

function CustomButton({ children, onClick }: any) {
  const { loading } = useContext(DataContext);
  return (
    <div className={styles.wrap}>
      <button onClick={onClick} disabled={loading}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(CustomButton);
