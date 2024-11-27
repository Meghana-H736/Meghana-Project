import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx";
import ProductGrid from "./ProductGrid";
import SearchBar from "./SearchBar.jsx";
import Footer from '../desktop1/Footer.jsx';

class ProductListPage extends Component {
  render() {
    return (
      <>
        <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
          <div className="flex gap-5 max-md:flex-col">
            <Sidebar />
            <main className="flex flex-col mt-5 ml-5 w-[74%] max-md:ml-0 max-md:w-full">
              <SearchBar />
              <ProductGrid />
            </main>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductListPage;
