import Dropdown from "../Dropdown/Dropdown";
import ListTable from "../ListTable/ListTable";
import ResultTable from "../ResultTable/ResultTable";
import styles from "./SearchContainer.module.css";

function SearchContainer() {
  return (
    <div className={styles.wrap}>
      <Dropdown />
      <ResultTable />
      <ListTable />
    </div>
  );
}

export default SearchContainer;
