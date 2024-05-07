import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({className, ...restProps}: PrismicNextLinkProps) {
  return <PrismicNextLink 
  className={clsx(
    "button button-small",
    className,
  )}
  {...restProps}
  />
}
