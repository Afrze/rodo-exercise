import { useContext } from "react";
import DataContext from "../../store/data-context";
import styles from "./ResultTable.module.css";

//destructure
function ResultTable(props: any) {
  const { searchedData, lowestPrice, medianPrice, highestPrice } =
    useContext(DataContext);

  return (
    <>
      {searchedData.searchedData.length > 0 && (
        <div className={styles.wrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Total Vehicals Matched</th>
                <th>{searchedData.searchedData.length}</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td className={styles.data}>Lowest Price</td>
                <td>{lowestPrice}</td>
              </tr>
              <tr>
                <td className={styles.data}>Median Price</td>
                <td>{medianPrice}</td>
              </tr>
              <tr>
                <td className={styles.data}>Highest Price</td>
                <td>{highestPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ResultTable;
