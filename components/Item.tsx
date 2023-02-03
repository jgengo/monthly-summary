import { ItemProps } from "./types";

const textByState: any = {
  outstanding: "text-lime-500",
  completed: "text-neutral-400",
  delayed: "text-red-400",
};

const markerByState: any = {
  outstanding: "before:bg-lime-500",
  completed: "before:bg-green-500/80",
  delayed: "before:bg-red-500",
};

const hasSpan: any = {
  outstanding: true,
  delayed: true,
  completed: false,
};

export default function Item({ state, text }: ItemProps) {
  return (
    <p className={`list-dot before:content[''] ${markerByState[state]}`}>
      {text}
      {hasSpan[state] && (
        <span className={`ml-5 ${textByState[state]} font-normal text-sm`}>
          {state}
        </span>
      )}
    </p>
  );
}
