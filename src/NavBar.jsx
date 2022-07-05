import { Bag, Bookmark, Globe, GraduationCap, HandbagSimple, Keyboard } from "phosphor-react";
import NavItem from "./NavItem";

export default function NavBar(){
    return (
        <div className="bg-zinc-600 shadow-lg h-10 flex flex-row justify-between items-center px-10">
            <h1 className="font-6xl">
                <a href="/#">
                    José Gois
                </a>
            </h1>
            <ul className="flex justify-end">
                <NavItem Icon={GraduationCap} caption="Curriculum"   href="curriculum"/>
                <NavItem Icon={HandbagSimple} caption="Portifolio"   href="portifolio"/>
                <NavItem Icon={Bookmark}      caption="Bookmarks"    href="bookmarks"/>
                <NavItem Icon={Keyboard}      caption="Publications" href="publications"/>
                <NavItem Icon={Globe}         caption="Contact"      href="contact"/>
            </ul>
        </div>
    )
}