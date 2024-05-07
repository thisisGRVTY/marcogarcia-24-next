import ButtonLink from "@/components/ButtonLink";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";


/**
 * Props for `HeroStart`.
 */
export type HeroStartProps = SliceComponentProps<Content.HeroStartSlice>;

/**
 * Component for "HeroStart" Slices.
 */
const HeroStart = ({ slice }: HeroStartProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section"
    >
      if (a) {
        <div className="section-hero-skills_wrapper">
                  <div className="section section-hero-skills">
                      <p>
                        <PrismicText field={slice.primary.subline1} />
                      </p>
                      <div className="divider divider_small"></div>
                      <p>
                        <PrismicText field={slice.primary.subline2} />
                      </p>
                      <div className="divider divider_small"></div>
                      <p>
                        <PrismicText field={slice.primary.subline3} />
                      </p>
                  </div>
        </div>
      }

      {isFilled.richText(slice.primary.heading) && (
        <h1 className="section-hero_title transform-header">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}

      <div className="section section-image-grid-2 hero">
        {isFilled.image(slice.primary.imageleft) && (
          <div className="image image-contain">
              <PrismicNextImage field={slice.primary.imageleft} />
          </div>
        )}
        {isFilled.image(slice.primary.imageright) && (
          <div className="image image-contain">
              <PrismicNextImage field={slice.primary.imageright} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroStart;
