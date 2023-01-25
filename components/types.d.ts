import { Key } from "react";

type SubtitleKey = string;

// export type DocProps = {
//   title: string,
//   subtitles: [],
//   [x: string]: {
//     outstanding?: [],
//     completed?: [],
//     delayed?: []  
//   }
// }

export type DocProps = Record<SubtitleKey, Subtitle> & {
  title: string
  subtitles: SubtitleKey[]
}

type Subtitle = {
  title: string
  outstanding?: string[]
  completed?: string[]
  delayed?: string[]  
}

export type CardProps = {
  doc: DocProps,
  ok?: boolean;
};

export type ItemProps = {
  state: string | index;
  text?: string;
  key?: Key;
};

export type CardTitleProps = {
  title: string,
  completedTasks: number
}

export type SectionProps = Subtitle