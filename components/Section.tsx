import { Key } from "react";
import Item from "./Item";

import { SectionProps } from './types'

export default function Section({ title, outstanding, completed, delayed }: SectionProps) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-3 sm:before:h-3 sm:before:rounded-full sm:before:left-[-33px] sm:before:z-[1] before:border-2 before:border-mypurple before:bg-mycardbg hover:before:bg-mypurple sm:hover:before:w-6 before:transition before:duration-300">
      <h3 className="text-lg font-semibold tracking-wide text-mypurple sm:before:border-t-2 before:w-12  before:absolute before:top-[13px] before:left-[-33px] before:border-solid before:border-mypurple sm:ml-6 uppercase font-mono">
        {title}
      </h3>
      <ul className="list-disc -ml-[17px] pt-1 space-y-1 text-sm font-semibold">
        {outstanding?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="outstanding" />;
        })}

        {completed?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="completed" />;
        })}

        {delayed?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="delayed" />;
        })}
      </ul>
    </div>
  );
}
