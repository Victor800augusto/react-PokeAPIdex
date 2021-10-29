import React from "react";
import Select from "react-select";

const options = [
  { value: "numberAsc", label: "Lowest Number" },
  { value: "numberDec", label: "Highest Number" },
  { value: "alphabetAZ", label: "A-Z" },
  { value: "alphabetZA", label: "Z-A" },
];

const styles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#5c5c5c",
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
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
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
  return (
    <Select
      options={options}
      isSearchable={false}
      placeholder="Order by..."
      styles={styles}
      components={{ IndicatorSeparator: () => null }}
      // onChange={handleChange}
    ></Select>
  );
};

export default OrderSelect;
