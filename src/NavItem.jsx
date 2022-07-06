import { Link } from "react-router-dom";

export default function NavItem({Icon,caption,href}){
    return (
        <Link to={href} className="hover:underline transition-all">
            <li className="px-5 hover:w-30 py-2 flex items-center gap-1  hover:rounded-full hover:bg-zinc-500 antialiased transition-all group">
                <Icon className="text-orange-400"/>                
                <span className="max-w-0 group-hover:max-w-xs overflow-hidden">{caption}</span>
            </li>    
        </Link>
    )
}