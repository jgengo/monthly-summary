import { ItemProps } from "./types";

const textByState: any = {
  outstanding: "text-lime-500",
  completed: "text-neutral-400",
  delayed: "text-red-400",
};

const markerByState: any = {
  outstanding: "marker:text-lime-500",
  completed: "marker:text-green-500",
  delayed: "marker:text-red-500",
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
        <span className={`ml-5 ${textByState[state]} font-normal text-sm`}>
          {state}
        </span>
      )}
    </li>
  );
}
