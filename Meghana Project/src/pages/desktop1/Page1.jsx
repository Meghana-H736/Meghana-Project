import React, { Component } from "react";
import ImageLink from "./ImageLink";

const navigationImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/d0b40b547ef3bf97549f7812a969cda00ba8a828c1133a6a68b0288b077e06cd?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&", alt: "Navigation item 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/b8f881632a0c28db2cf9bd5eac050803d4f0d0e9842465e48236f2bbac22d4ac?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&", alt: "Navigation item 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/159308a0fe1e8814d920f21935887ac95236917480c67017ec49901471a22579?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&", alt: "Navigation item 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/efce9f46d6e1e63f72a418f39e94b790a9b893586d627b3e56a70e178f0ba144?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&", alt: "Navigation item 4" },
];

class NavigationBar extends Component {
  render() {
    return (
      <>
        <nav className="flex overflow-hidden flex-wrap gap-10 px-4 py-4 bg-white border border-solid border-slate-300 border-opacity-40 max-md:px-5">
          <section className="flex flex-wrap gap-10 max-md:max-w-full">
            <div className="flex shrink-0 my-auto h-4 rounded-3xl bg-zinc-500 w-[116px]" />
            <div className="flex flex-wrap flex-auto gap-3.5 py-4 pr-20 pl-8 border border-solid bg-white bg-opacity-80 border-slate-300 rounded-[70px] max-md:px-5">
              <div className="flex shrink-0 rounded-3xl bg-zinc-500 h-[15px] w-[15px]" />
              <div className="flex shrink-0 bg-indigo-50 rounded-3xl h-[15px] w-[115px]" />
            </div>
          </section>
          <section className="md:ml-[602px] flex gap-5">
            {navigationImages.map((image, index) => (
              <ImageLink key={index} src={image.src} alt={image.alt} />
            ))}
          </section>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
