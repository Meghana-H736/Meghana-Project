import * as React from "react";

const ImageLink = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 w-11 rounded-none aspect-square"
    />
  );
};

export default ImageLink;