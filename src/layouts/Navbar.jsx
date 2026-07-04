function Navbar() {
  const menuItems = [
    { label: "Giới thiệu", href: "/" },
    { label: "Kỹ năng", href: "/" },
    { label: "Dự án", href: "/" },
    { label: "Liên Hệ", href: "/" },
  ];

  return (
    <header className="w-full h-[74px] bg-[#f4f7fd] border-b-2 border-solid border-b-[#e6edf7]">
      <nav className="h-full flex items-center justify-around">
        <a
          href="/"
          className="flex gap-2 font-bold text-2xl bg-gradient-to-r from-logo-blue via-logo-purple-mid to-logo-purple bg-clip-text text-transparent"
        >
          <div
            className="h-[32px] w-[32px] bg-gradient-to-r from-logo-blue via-logo-purple-mid to-logo-purple"
            style={{
              mask: "url(/src/assets/icons/logo-portfolio.svg) center/contain no-repeat",
              WebkitMask:
                "url(/src/assets/icons/logo-portfolio.svg) center/contain no-repeat",
            }}
          />
          <span>Portfolio</span>
        </a>
        <ul className="flex gap-8 font-medium text-slate-700 h-full">
            {
                menuItems.map((item, index) => (
                    <li key={index} className="li-header">
                        <a href={item.href}>{item.label}</a>
                        <span></span>
                    </li>
                ))
            }
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
