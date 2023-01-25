import { ItemProps } from "./types";

const textByState: any = {
  outstanding: "text-yellow-500",
  completed: "text-green-500",
  delayed: "text-red-500",
};

const markerByState: any = {
  outstanding: "marker:text-yellow-400",
  completed: "marker:text-green-400",
  delayed: "marker:text-red-400",
};

const hasSpan: any = {
  outstanding: true,
  delayed: true,
  completed: false,
};

export default function Item({ state, text }: ItemProps) {
  return (
    <li className={`pl-4 marker:text-md ${markerByState[state]}`}>
      {text}
      {hasSpan[state] && (
        <span className={`ml-2 ${textByState[state]} font-normal text-xs`}>
          {state}
        </span>
      )}
    </li>
  );
}
