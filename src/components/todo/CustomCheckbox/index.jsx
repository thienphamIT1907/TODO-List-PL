import React from "react";
import CustomCheckboxStyled from "./styles";

const CustomCheckbox = ({ id, isChecked }) => {
  return (
    <CustomCheckboxStyled>
      <label htmlFor={id} className="checkbox__container">
        <input type="checkbox" id={id} checked={isChecked} />
        <div className="checkbox__mask"></div>
      </label>
    </CustomCheckboxStyled>
  );
};

export default CustomCheckbox;
