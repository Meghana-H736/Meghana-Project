import React, { Component } from 'react';

class ContentBlock extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
          {items.map((_, index) => (
            <div
              key={index}
              className={`flex shrink-0 ${index === 0 ? 'mt-8' : 'mt-3'} h-4 bg-indigo-50 rounded-3xl`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContentBlock;
