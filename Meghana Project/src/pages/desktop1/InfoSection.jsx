import React, { Component } from "react";

class InfoSection extends Component {
  render() {
    const { lines, isFirst } = this.props;

    return (
      <section className={`flex flex-col ${!isFirst ? 'ml-5' : ''} w-[33%] max-md:ml-0 max-md:w-full`}>
        <div className={`flex flex-col grow ${!isFirst ? 'mt-11' : ''} max-md:mt-10`}>
          {lines.map((line, index) => (
            <div
              key={index}
              className={`flex shrink-0 ${line.marginTop} ${line.height} ${
                line.highlight ? 'bg-indigo-50' : 'bg-zinc-500'
              } rounded-3xl`}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default InfoSection;
