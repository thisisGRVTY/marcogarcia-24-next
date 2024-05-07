import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ImageGrid4`.
 */
export type ImageGrid4Props = SliceComponentProps<Content.ImageGrid4Slice>;

/**
 * Component for "ImageGrid4" Slices.
 */
// const ImageGrid4 = ({ slice }: ImageGrid4Props): JSX.Element => {
const ImageGrid4 = ({ slice }: ImageGrid4Props): JSX.Element => {
  const { items } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section section-image-grid-4"
    >
        {slice.items.map((item, index) => (
          <div key={index} className="grid-container">
            <div className="image-contain">
              <PrismicNextImage  field={item.image} />
            </div>
          </div>
            // <PrismicNextLink key={index} field={item.link}></PrismicNextLink>
        ))}
    </section>
  );
};

export default ImageGrid4;
