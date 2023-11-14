import { CheckboxParamTypes, Specification } from "./types";

export const specification: Specification = {
  min: 1600,
  max: 3800,
  step: 10,
};

export const capacity: CheckboxParamTypes[] = [
  { value: "До 20 человек", label: "До 20 человек", id: 1 },
  { value: "От 20 до 50", label: "От 20 до 50", id: 2 },
  { value: "Больше 50", label: "Больше 50", id: 3 },
];

export const capacityDefault = capacity[0].label;

export const zoning: CheckboxParamTypes[] = [
  { value: "Место для игр", label: "Место для игр", id: 1 },
  {
    value: "Место, чтобы переодеться",
    label: "Место, чтобы переодеться",
    id: 2,
  },
  { value: "Место для красивых фото", label: "Место для красивых фото", id: 3 },
];

export const zoningDefault = zoning[0].label;

export const rating: CheckboxParamTypes[] = [
  { value: "3 и больше", label: "3 и больше", id: 1 },
  { value: "4 и больше", label: "4 и больше", id: 2 },
  { value: "5", label: "5", id: 3 },
];

export const ratingDefault = rating[0].label;

const date = new Date();
export const currentDate = `${date.getFullYear()}-${
  date.getMonth() + 1
}-${date.getDate()}`;

export const areas = [
  { title: "Василеостровский", isChecked: false, id: 1 },
  { title: "Выборгский", isChecked: false, id: 2 },
  { title: "Калининский", isChecked: false, id: 3 },
  { title: "Кировский", isChecked: false, id: 4 },
  { title: "Красногвардейский", isChecked: false, id: 5 },
  { title: "Красносельский", isChecked: false, id: 6 },
  { title: "Кронштадский", isChecked: false, id: 7 },
  { title: "Курортный", isChecked: false, id: 8 },
  { title: "Московский", isChecked: false, id: 9 },
  { title: "Невский", isChecked: false, id: 10 },
  { title: "Петроградский", isChecked: false, id: 11 },
  { title: "Петродворцовый", isChecked: false, id: 12 },
];
