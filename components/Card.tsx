import { Key } from "react";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import Section from "./Section";

import type { CardProps } from "./types";

export default function Card({ doc, ok }: CardProps) {
  return (
    <div className="w-2/3 bg-mycardbg py-5 rounded-lg shadow-xl">
      <CardHeader />

      <CardTitle
        title={ok ? doc.title : "error"}
        completedTasks={ok ? 12 : "none"}
      />

      {/* Card Content */}
      <section className="text-gray-800">
        <div className="py-5">
          <div className="grid gap-4 mx-4 sm:grid-cols-22">
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              {ok ? (
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-mypurple/50">
                  {doc.subtitles?.map((subtitle: string, idx: Key) => {
                    return (
                      doc[subtitle] && (
                        <Section
                          key={idx}
                          title={doc[subtitle].title}
                          outstanding={doc[subtitle].outstanding}
                          completed={doc[subtitle].completed}
                          delayed={doc[subtitle].delayed}
                        />
                      )
                    );
                  })}
                </div>
              ) : (
                "You are missing some important keys into your config file."
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
