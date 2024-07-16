import React from "react";
import { Select } from "../shared/Select/Select.tsx";
import ru from "@assets/img/ru.svg";
import en from "@assets/img/en.svg";
import fr from "@assets/img/fr.svg";

interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = () => {
  return (
    <Select
      options={[
        { value: "RU", icon: <img src={ru} alt="" /> },
        { value: "EN", icon: <img src={en} alt="" /> },
        { value: "FR", icon: <img src={fr} alt="" /> },
      ]}
    />
  );
};
