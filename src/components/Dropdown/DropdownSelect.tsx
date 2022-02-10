import styles from "./Dropdown.module.css";

const DropdownSelect = ({
  placeholder = "",
  label = "",
  objectKey = "",
  data = [],
  handleDropDown,
  isPrice = false,
}: any) => {
  return (
    <div className={styles.group}>
      <label>{label}</label>
      <select
        className={styles.select}
        onChange={({ target: { value } }) => handleDropDown(objectKey, value)}
      >
        <option value={""}>{placeholder}</option>
        <optgroup>
          {data.map((item: any, index: any) => (
            // <option {...{ value, index }} key={index}>
            //   {isPrice ? data?.price : value}
            // </option>
            <option key={index} value={isPrice ? item.value : item}>
              {isPrice ? item.price : item}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default DropdownSelect;
