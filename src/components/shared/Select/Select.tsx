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
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        fontFamily: "Inter",
        fontWeight: 600,
        boxShadow: "none",
        borderRadius: "10px",
        ".MuiOutlinedInput-notchedOutline": {
          border: 0,
          boxSizing: "border-box",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        ".MuiSelect-icon": {
          marginTop: "4px",
          marginRight: "-6px",
        },
      }}
      defaultValue={"RU"}
      label={label}
      IconComponent={DropdownArrow}
      slotProps={{
        root: {
          sx: {
            boxShadow: "none", // Убираем тень у развернутого меню
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#FFFFFFFF", // цвет фона для выбранной опции
            },
            ".Mui-selected:hover": {
              backgroundColor: "#FFFFFFFF", // цвет фона для выбранной опции при наведении мыши
            },
            "&:hover": {
              backgroundColor: "#FFFFFFFF", // цвет фона для опции при наведении мыши
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            {option.icon}
            <span>{option.value}</span>
          </div>
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
