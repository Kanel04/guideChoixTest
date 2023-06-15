import * as React from "react";
import "./navbar.css"
interface NavbarProps {
    content?: React.ReactElement;
    className?: string;
}
export const Navbar : React.FC<NavbarProps> = ({
content,
className,
}) =>
        {
    
return(
    <>
    <div className={` navbar  ${className}`}>
     {content}
    </div>
    </>
)

}