import { CheckboxParamTypes, Specification } from "./types";

export const specification: Specification = {
  min: 1600,
  max: 3800,
  defaultValue: 2000,
  step: 10,
};

export const checkboxParams: CheckboxParamTypes[] = [
  { value: "", label: "", id: 1 },
  { value: "", label: "", id: 2 },
  { value: "", label: "", id: 2 },
];
