import { Bag, Bookmark, Globe, GraduationCap, HandbagSimple, Keyboard } from "phosphor-react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function NavBar(){
    return (
        <div className="bg-zinc-600 outline outline-1 shadow-lg h-10 flex flex-row justify-between items-center ">
            <h1 className="font-6xl m-5 text-orange-300">
                <Link to="/#">
                    José Gois
                </Link>
            </h1>
            <ul className="flex justify-end">
                <NavItem Icon={GraduationCap} caption="Curriculum"   href="/curriculum"/>
                <NavItem Icon={HandbagSimple} caption="Portifolio"   href="/portifolio"/>
                <NavItem Icon={Bookmark}      caption="Bookmarks"    href="/bookmarks"/>
                <NavItem Icon={Keyboard}      caption="Publications" href="/publications"/>
                <NavItem Icon={Globe}         caption="Contact"      href="/contact"/>
            </ul>
        </div>
    )
}