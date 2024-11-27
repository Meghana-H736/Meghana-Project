import React, { Component } from 'react';
import ContentBlocks from './ContentBlocks';

const contentData = [
  {
    title: true,
    items: Array(4).fill(true)
  },
  {
    title: true,
    items: Array(4).fill(true)
  },
  {
    title: true,
    items: Array(4).fill(true)
  }
];

class LayoutSection extends Component {
  render() {
    return (
      <main className="flex overflow-hidden flex-col px-16 py-16 bg-white max-md:px-5">
        <section className="flex flex-wrap gap-10 w-full max-md:mr-1 max-md:max-w-full">
          <header className="flex flex-col self-start">
            <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
            <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
          </header>
          <article className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {contentData.map((block, index) => (
                <ContentBlocks
                  key={index}
                  title={block.title}
                  items={block.items}
                />
              ))}
            </div>
          </article>
        </section>
        <hr className="shrink-0 mt-32 h-px border border-solid border-neutral-900 border-opacity-20 max-md:mt-10 max-md:max-w-full" />
        <footer className="flex flex-wrap gap-5 justify-between mt-14 w-full max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500 w-[116px]" />
          <nav className="flex gap-10">
            <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[116px]" />
            <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[116px]" />
          </nav>
        </footer>
      </main>
    );
  }
}

export default LayoutSection;
