import WordMark from "@/components/wordmark"
import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  
  return (
      <div className="footer ">
            <div className="social-media ">
                <a href="https://www.linkedin.com/in/marco-sassanelli-garcia-41394120a/" target="blank">Linkedin</a>
                <a href="https://www.instagram.com/marco.thisisgrvty/" target="blank">Instagram</a>
            </div>
            <div className="page-version">
                version 1.9.3
            </div>
            <div className="additional-info ">
                <a href="./impressum.html">Impressum</a> &nbsp;|&nbsp;
                <a href="./datenschutz.html">Datenschutz</a>
            </div>
      </div>
  )
}

