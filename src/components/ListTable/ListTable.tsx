import { useContext } from "react";
import DataContext from "../../store/data-context";
import styles from "./ListTable.module.css";

const ListTable = (props: any) => {
  const { searchedData } = useContext(DataContext);

  const vehicleListData: any = {};

  searchedData.searchedData.forEach((item: any) => {
    var key = `${item.make} ${item.model}`;
    if (!vehicleListData[key]) {
      vehicleListData[key] = item.vehicle_count;
    } else {
      vehicleListData[key] = vehicleListData[key] + item.vehicle_count;
    }
  });

  return (
    <>
      {Object.keys(vehicleListData).length !== 0 && (
        <div className={styles.wrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Matches by Make and Model</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {vehicleListData &&
                Object.keys(vehicleListData).map((item: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td className={styles.data}>{item}</td>
                      <td>{vehicleListData[item]}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ListTable;
