import { Dayjs } from "dayjs";

export type SidebarTypes = {
  date: string;
  price: number;
  square: number;
  capacity: string;
  zoning: string;
  rating: string;
  areas:
    | {
        title: string;
        isChecked: boolean;
        id: number;
      }[]
    | [];
  time: {
    from: string;
    to: string;
  };
};
