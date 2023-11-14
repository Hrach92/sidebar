export type Specification = {
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  marks: [
    {
      value: number;
      label: string;
    },
    {
      value: number;
      label: string;
    }
  ];
};
