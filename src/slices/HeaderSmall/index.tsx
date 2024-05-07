import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeaderSmall`.
 */
export type HeaderSmallProps = SliceComponentProps<Content.HeaderSmallSlice>;

/**
 * Component for "HeaderSmall" Slices.
 */
const HeaderSmall = ({ slice }: HeaderSmallProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
            <div className="section section-header header">
                    <PrismicRichText field={slice.primary.heading} 
                      components={{
                        heading1: ({children}) =>(
                          <h1 className="section-hero_title transform-header align-left">
                              {children}
                          </h1>
                        )
                      }}
                    />
                <div>
                      <PrismicRichText field={slice.primary.subline} 
                      components={{
                        heading4: ({children}) =>(
                          <h4 className="section-hero_title transform-header align-left">
                              {children}
                          </h4>
                        )
                      }}
                      />
                    <p>
                      <PrismicRichText field={slice.primary.paragraph} 
                      />
                    </p>
                    <div className="arrow-down"></div>
                </div>
            </div>
    </section>
  );
};

export default HeaderSmall;
