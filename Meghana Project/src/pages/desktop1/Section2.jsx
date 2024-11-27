import React, { Component } from "react";

class HeroSection extends Component {
  render() {
    return (
      <main className="flex overflow-hidden flex-col grow justify-center items-center px-20 py-36 w-full bg-white rounded-xl max-md:px-5 max-md:py-24 max-md:mt-8 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/e69fe620f1bf2b974b4ac8edb30be4d4374af3f9e6d6abc35052be68b4b34dbe?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
          alt="Hero section decorative image"
          className="object-contain ml-8 aspect-square w-[60px]"
        />
      </main>
    );
  }
}

export default HeroSection;
