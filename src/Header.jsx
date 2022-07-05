import { Bag, Bookmark, Globe, GraduationCap, Handbag, HandbagSimple, Keyboard } from "phosphor-react";

export default function Header(){
    return (
        <div className="bg-zinc-600 shadow-lg h-10 flex flex-row justify-end items-center">
            <ul className="flex justify-end">
                <li className="p-2">
                    <a href="" className="flex items-center">
                        <GraduationCap/>
                        Curriculum
                    </a>
                </li>
                <li className="p-2">
                    <a href="" className="flex items-center">
                        <HandbagSimple/>
                        Portifolio
                    </a>
                </li>
                <li className="p-2">
                    <a href="" className="flex items-center">
                        <Bookmark/>
                        Bookmarks
                    </a>
                </li>
                <li className="p-2">
                    <a href="" className="flex items-center">
                        <Keyboard/>
                        Publications
                    </a>
                </li>
                <li className="p-2">
                    <a href="" className="flex items-center">
                        <Globe/>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}