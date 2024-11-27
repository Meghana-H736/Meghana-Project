import React, { Component } from "react";

class NavigationLinks extends Component {
  render() {
    const navigationData = [
      {
        text: "Popular Car",
        className: "md:ml-4 text-slate-400 w-[132px]"
      },
      {
        text: "View All",
        className: "md:ml-[1000px] text-neutral-700 w-[104px]"
      }
    ];

    return (
      <nav className="flex flex-wrap gap-10 items-start text-base font-semibold text-center max-md:max-w-full mt-10">
        {navigationData.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`gap-6  px-5 rounded min-h-[44px] ${item.className}`}
            tabIndex="0"
            role="link"
          >
            {item.text}
          </a>
        ))}
      </nav>
    );
  }
}

export default NavigationLinks;
