export default function NavItem({Icon,caption,href}){
    return (
        <a href={href} className="hover:underline transition-all">
            <li className="px-5 py-2 flex items-center gap-1  hover:rounded-full hover:bg-zinc-500 antialiased transition-all">
                <Icon/>                
                <p>{caption}</p>
            </li>    
        </a>
    )
}