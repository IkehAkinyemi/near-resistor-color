import { logging } from 'near-sdk-as';
export function resistorColor(colParams: Array<string>): i32 {
  const colorAry = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  const firstNumber = colorAry.indexOf(colParams[0], 0);
  const secondNumber = colorAry.indexOf(colParams[1], 0);
  return firstNumber * 10 + secondNumber;
}
