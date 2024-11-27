import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductGrid extends Component {
  render() {
    return (
      <section className="flex flex-col mt-9 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
          <div className="flex flex-row gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex flex-row gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex flex-row gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <footer className="flex flex-wrap gap-5 justify-between self-end mt-16 max-w-full text-sm font-bold text-right text-slate-400 w-[588px] max-md:mt-10">
          <button className="flex shrink-0 h-10 rounded-xl bg-neutral-700 w-[116px]" />
          <div className="my-auto">120 Car</div>
        </footer>
      </section>
    );
  }
}

export default ProductGrid;
