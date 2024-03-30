import { ChangeEvent } from "react";

export interface ChildOneProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onBtnClearClick: () => void,
};

export interface ChildTwoProps {
  sortedList: number[],
}