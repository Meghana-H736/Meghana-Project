import * as React from "react";

export function CarCard({ title, subtitle, iconSrc, carImageSrc, specs, price, buttonText }) {
  return (
    <article className="flex overflow-hidden flex-col px-6 pt-6 pb-10 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col">
          <h3 className="flex shrink-0 h-4 rounded-3xl bg-zinc-500">{title}</h3>
          <p className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl">{subtitle}</p>
        </div>
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-start w-6 aspect-square"
        />
      </div>

      <img
        loading="lazy"
        src={carImageSrc}
        alt={`${title} car`}
        className="object-contain self-center mt-16 aspect-square w-[60px] max-md:mt-10"
      />

      <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
        {specs.map((spec, index) => (
          <div key={index} className="flex shrink-0 h-4 bg-indigo-50 rounded-3xl w-[68px]">
            {spec}
          </div>
        ))}
      </div>

      <div className="flex gap-6 mt-9">
        <div className="flex flex-col flex-1">
          <p className="flex shrink-0 h-4 rounded-3xl bg-zinc-500">{price}</p>
          <p className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl">per day</p>
        </div>
        <button
          className="flex shrink-0 h-10 rounded-xl bg-neutral-700 w-[116px]"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
}
