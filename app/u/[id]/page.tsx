import fs from "fs";
import yaml from "js-yaml";

import Card from "../../../components/Card";

export default function uWithId({ params }: any) {
  try {
    const doc = yaml.load(
      fs.readFileSync(
        `/Users/titus/javascript/monthly/resources/${params.id}.yml`,
        "utf8"
      )
    );

    return (
      <div>
        <main className="flex justify-center items-center">
          <Card doc={doc} ok={doc.title && doc.subtitles ? true : false} />
        </main>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
