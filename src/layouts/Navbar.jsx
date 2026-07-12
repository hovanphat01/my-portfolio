import logoPortfolio from "../assets/icons/logo-portfolio.svg";
import iconMenu from "../assets/icons/icon-menu.svg";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { label: "Giới thiệu", href: "/" },
    { label: "Kỹ năng", href: "/" },
    { label: "Dự án", href: "/" },
    { label: "Liên Hệ", href: "/" },
  ];

  return (
    <header className="w-full h-[74px] bg-[#f4f7fd] border-b-2 border-solid border-b-[#e6edf7]">
      <nav className="relative h-full">
        <div className="div-nav">
          <a
            href="/"
            className="link-logo"
          >
            <div
              className="icon-logo"
              style={{
                mask: `url("${logoPortfolio}") center/contain no-repeat`,
                WebkitMask: `url("${logoPortfolio}") center/contain no-repeat`,
              }}
            />
            <span>Portfolio</span>
          </a>
          <ul className=" hidden lg:flex gap-8 font-medium text-slate-700 h-full">
            {menuItems.map((item, index) => (
              <li key={index} className="li-header">
                <a href={item.href}>{item.label}</a>
                <span></span>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="btn-nav group">
            <div
              className="h-[32px] w-[32px] bg-gray-600 group-hover:bg-gray-900 transition-colors"
              style={{
                mask: `url("${iconMenu}") center/contain no-repeat`,
                WebkitMask: `url("${iconMenu}") center/contain no-repeat`,
              }}
            ></div>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-[72px] px-10 w-full bg-white border-b border-gray-200 shadow-md z-50 `}>
          <ul className="font-medium text-slate-700 h-full">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2">
                <a href={item.href}>{item.label}</a>
                <span></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
