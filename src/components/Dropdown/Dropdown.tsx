import { memo, useContext, useEffect, useState } from "react";
import { priceArrayConstants } from "../../constants/priceArrayConstants";
import DataContext from "../../store/data-context";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Dropdown.module.css";
import DropdownSelect from "./DropdownSelect";

function Dropdown() {
  const [dropObj, setDropObj]: any = useState({
    make: "",
    model: "",
    year: "",
    price_lte: "",
  });

  useEffect(() => {
    setDropObj({
      ...dropObj,
      model: "",
    });
  }, [dropObj.make]);

  const { vehicles, onSearch, allAvailableYears, makesArray, loading } =
    useContext(DataContext);

  //Fetching models based on make
  let models: any[] = vehicles.vehicles
    .filter((item: any) => item.make === dropObj.make)
    .reduce((pre: any, cur: any) => {
      if (!pre.includes(cur.model)) {
        pre.push(cur.model);
      }
      return pre;
    }, []);

  const searchHandler = () => {
    const newUrl = `/vehicles?${Object.keys(dropObj)
      .map((key) => dropObj[key] && key + "=" + dropObj[key])
      .filter((item) => item)
      .join("&")}`;
    onSearch(newUrl);
  };

  const handleDropDown = (label: string, value: string) => {
    setDropObj({
      ...dropObj,
      [label]: value,
    });
  };

  return (
    <div className={styles.wrap}>
      <DropdownSelect
        {...{
          label: "Makes",
          placeholder: "All Makes",
          objectKey: "make",
          data: makesArray,
          handleDropDown,
        }}
      />
      <DropdownSelect
        {...{
          label: "Model",
          placeholder: "All Models",
          objectKey: "model",
          data: models,
          handleDropDown,
        }}
      />
      <DropdownSelect
        {...{
          label: "Year",
          placeholder: "Any",
          objectKey: "year",
          data: allAvailableYears,
          handleDropDown,
        }}
      />
      <DropdownSelect
        {...{
          label: "Price",
          placeholder: "No Max Price",
          data: priceArrayConstants,
          objectKey: "price_lte",
          isPrice: true,
          handleDropDown,
        }}
      />

      <div className={styles.group}>
        <CustomButton onClick={searchHandler}>
          {loading ? "...Loading" : "Search"}
        </CustomButton>
      </div>
    </div>
  );
}

export default memo(Dropdown);
