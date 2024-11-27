import * as React from "react";
import ContentBlock from "./ContentBlock";

class ContentLayout extends React.Component {
  render() {
    return (
      <main className="flex flex-wrap gap-10 mt-6 w-full max-md:max-w-full">
        <ContentBlock />
        <div
          className="flex shrink-0 my-auto rounded-xl bg-neutral-700 h-[60px] w-[60px]"
          role="separator"
          aria-hidden="true"
        />
        <ContentBlock />
      </main>
    );
  }
}

export default ContentLayout;
