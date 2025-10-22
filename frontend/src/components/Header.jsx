import { useState, useEffect } from "react";
import "./Header.css";
import Login from "../assets/images/account.png";
import Home from "../assets/images/menu.png";
import Logo from "../assets/images/logo.png"

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShow(false); // scroll xuống → ẩn
            } else {
                setShow(true);  // scroll lên → hiện
            }
            setLastScrollY(window.scrollY);
        };

        // Lắng nghe scroll của toàn trang
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`header ${show ? "" : "hidden"}`}>
            <img src={Logo} alt="Logo" className="Logo" />
            <button id="Login">
                <img src={Login} alt="Account Icon" className="LoginIcon" />
            </button>
            <button id="Home">
                <img src={Home} alt="Home Icon" className="HomeIcon" />
            </button>
            

        </div>
    );
}

export default Header;
