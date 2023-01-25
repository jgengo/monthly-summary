import fs from "fs";
import yaml from "js-yaml";

import Card from "../../../components/Card";
import type { DocProps } from "../../../components/types";

export default function uWithId({ params }: any) {
  
  try {
    const doc = yaml.load(
      fs.readFileSync(
        `./resources/${params.id}.yml`,
        "utf8"
      )
    ) as DocProps;

    return (
      <div>
        <main className="flex flex-col justify-center items-center w-5/6 sm:max-w-lg mx-auto">
          <Card doc={doc} ok={doc.title && doc.subtitles ? true : false}  />
          <span className="font-mono  text-xs mt-3 text-gray-500 self-end">🚀 by Titus</span>
        </main>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
