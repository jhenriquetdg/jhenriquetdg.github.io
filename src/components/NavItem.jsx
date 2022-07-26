import { Link } from "react-router-dom";
import '../styles/NavItem.css'
export default function NavItem({Icon,caption,href}){
    return (
        <Link to={href} className="group transition-all duration-1000">
            <li className="px-5 hover:w-30 py-2 flex items-center gap-1  hover:rounded-full hover:bg-zinc-500 antialiased transition-all duration-1000">
                <Icon className="text-orange-400 group-hover:animate-bounce"/>                
                <span className="max-w-0 group-hover:max-w-xs overflow-hidden">{caption}</span>
            </li>    
        </Link>
    )
}