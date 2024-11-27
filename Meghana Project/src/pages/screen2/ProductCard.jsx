import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <article className="flex overflow-hidden flex-col px-6 pt-6 pb-10 bg-white rounded-xl min-w-[240px] w-[317px] max-md:px-5">
        <header className="flex gap-5 justify-between">
          <div className="flex flex-col">
            <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
            <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/572a9c2f4f3e4f65a3f342e8a940ffa238bd1d4937319c357c731d0ec3abbd5f?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
            alt=""
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
        </header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/e36d99b31cc83276ce22c73ee2503d60b822288b6d8e63c168113332d7e0e216?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
          alt=""
          className="object-contain self-center mt-16 aspect-square w-[60px] max-md:mt-10"
        />
        <div className="flex gap-5 mt-16 max-md:mt-10">
          <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[76px]" />
          <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[76px]" />
          <div className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[76px]" />
        </div>
        <footer className="flex gap-9 mt-9">
          <div className="flex flex-col flex-1">
            <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
            <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
          </div>
          <button className="flex shrink-0 h-10 rounded-xl bg-neutral-700 w-[116px]" />
        </footer>
      </article>
    );
  }
}

export default ProductCard;
