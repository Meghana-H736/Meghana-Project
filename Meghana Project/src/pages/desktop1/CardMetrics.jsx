import React, { Component } from 'react';

class CardMetrics extends Component {
  render() {
    return (
      <section className="flex gap-5 justify-between mt-16 max-md:mt-10">
        <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[68px]" />
        <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[68px]" />
        <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[68px]" />
      </section>
    );
  }
}

export { CardMetrics };
