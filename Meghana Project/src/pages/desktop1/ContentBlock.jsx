import React, { Component } from "react";
import InfoSection from "./InfoSection";

class ContentBlock extends Component {
  render() {
    const sections = [
      {
        lines: [
          { height: "h-4", marginTop: "mt-0" },
          { height: "h-4", marginTop: "mt-7" },
          { height: "h-4", marginTop: "mt-2", highlight: true }
        ]
      },
      {
        lines: [
          { height: "h-4", marginTop: "mt-11" },
          { height: "h-4", marginTop: "mt-2", highlight: true }
        ]
      },
      {
        lines: [
          { height: "h-4", marginTop: "mt-11" },
          { height: "h-4", marginTop: "mt-2", highlight: true }
        ]
      }
    ];

    return (
      <article className="flex-auto px-3 py-2 bg-white rounded-xl max-md:px-5 ">
        <div className="flex gap-5 max-md:flex-col">
          {sections.map((section, index) => (
            <InfoSection
              key={index}
              lines={section.lines}
              isFirst={index === 0}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default ContentBlock;
