import React from "react";
import { MenuItem, Select as MuiSelect } from "@mui/material";

interface Option {
  value: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: Option[];
  label?: string;
}

const DropdownArrow: React.FC = (props) => (
  <svg
    {...props}
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="#9395B8"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Select: React.FC<SelectProps> = ({ label, options }) => {
  return (
    <MuiSelect
      defaultValue={"RU"}
      label={label}
      autoWidth={true}
      IconComponent={DropdownArrow}
      sx={{
        borderRadius: "1rem",
        backgroundColor: "#EEF0F7",
        width: "7rem",
        height: "2rem",
        borderColor: "transparent",
        color: "#06082C",
        fontSize: "1.4rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
          borderColor: "red",

          // Другие стили при наведении
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.icon}
          <span>{option.value}</span>
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
