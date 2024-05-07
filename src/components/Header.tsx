import WordMark from "@/components/wordmark";
import NavBar from "@/components/NavBar";
import { createClient } from "@/prismicio"
import ToggleSwitch from "./ToggleSwitch";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    // <header>
    //   <NavBar settings={settings}/>
    // </header>
    <nav className="nav">
      <a href="mailto:hallo@marcogarcia.de">hallo@marcogarcia.de</a>
      <p className="hide-on-mobile">Digital Designer</p>
      <ToggleSwitch />
      <div>
        <NavBar settings={settings}/>
      </div>
  </nav>
  )
}
