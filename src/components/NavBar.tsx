"use Client";

import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/wordmark";

type NavBarProps = {
    settings: Content.SettingsDocument
}

export default function NavBar({settings}: NavBarProps) {
  return (
      <div aria-label="Main">
                {settings.data.navigation.map((item) => {
                    if(item.cta_button) {
                        return (
                            <ButtonLink 
                                key={item.label} 
                                field={item.link} 
                            >
                                    {item.label}
                            </ButtonLink>
                        )
                    }
                    return(
                            <PrismicNextLink 
                                key={item.label} 
                                field={item.link} 
                                className="">
                                    {item.label}
                            </PrismicNextLink>
                    )}
                )}
        </div>
  )
}
