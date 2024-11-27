import React, { Component } from "react";


class SearchBar extends Component {
  render() {
    return (
      <div className="flex items-start w-full max-md:max-w-full">
        <div className="flex-auto px-5 pt-4 pb-8 mt-1.5 bg-white rounded-xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <SearchSection />
            <SearchSection />
            <SearchSection />
          </div>
        </div>
        <div className="flex z-10 shrink-0 mt-10 rounded-xl bg-neutral-700 h-[60px] w-[60px] max-md:mr-0" />
        <div className="flex-auto px-5 pt-4 pb-8 bg-white rounded-xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <SearchSection />
            <SearchSection />
            <SearchSection />
          </div>
        </div>
      </div>
    );
  }
}

class SearchSection extends Component {
  render() {
    return (
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10">
          <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
          <div className="flex shrink-0 mt-8 h-4 rounded-3xl bg-zinc-500" />
          <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
