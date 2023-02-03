import { Key } from "react";
import Item from "./Item";

import { SectionProps } from './types'

export default function Section({ title, outstanding, completed, delayed }: SectionProps) {
  return (
    <div className="section">
      <h3 className="section-header">
        {title}
      </h3>
      <div className="pt-1 space-y-1 text-sm font-semibold">
        {outstanding?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="outstanding" />;
        })}

        {completed?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="completed" />;
        })}

        {delayed?.map((out: string, idx: Key) => {
          return <Item key={idx} text={out} state="delayed" />;
        })}
      </div>
    </div>
  );
}
