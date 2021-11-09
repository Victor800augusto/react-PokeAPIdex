import React from "react";
import Select from "react-select";
import { useGlobalContext } from "../context";

const options = [
  { value: "numberAsc", label: "Lowest Number" },
  { value: "numberDec", label: "Highest Number" },
  { value: "alphabetAZ", label: "A-Z" },
  { value: "alphabetZA", label: "Z-A" },
];

const styles = {
  container: (base) => ({
    ...base,
    "@media (min-width:550px)": {
      alignSelf: "flex-end",
    },
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#5c5c5c",
    borderColor: "black",
    borderWidth: "3px",
    "&:hover": {
      outline: "none",
    },
    boxShadow: "none",

    "@media (min-width:550px)": {
      width: "200px",
    },
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "18px",
    color: "#fff",
    fontWeight: 400,
  }),
  singleValue: (base) => ({ ...base, color: "#fff", fontSize: "18px" }),
  valueContainer: (base) => ({
    ...base,
    background: "#5c5c5c",
    color: "#fff",
    fontSize: "18px",
  }),
  menu: (provided) => ({
    ...provided,
    margin: 0,
    "@media (min-width:550px)": {
      width: "200px",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderStyle: "solid",
    borderWidth: "3px",
    borderRadius: "4px",
    borderTop: "none",
    backgroundColor: "#5c5c5c",
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: "#fff",
    backgroundColor: state.isFocused ? "#66ccff " : "#5c5c5c",
    backgroundColor: state.isSelected ? "#00aaff " : "#5c5c5c",
    "&:hover": {
      backgroundColor: "#66ccff",
    },
    fontSize: "18px",
  }),
};

const OrderSelect = () => {
  const { handleChange } = useGlobalContext();

  return (
    <Select
      options={options}
      isSearchable={false}
      placeholder="Order by..."
      styles={styles}
      components={{ IndicatorSeparator: () => null }}
      onChange={handleChange}
    ></Select>
  );
};

export default OrderSelect;
