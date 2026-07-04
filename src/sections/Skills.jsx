function Skills() {
  const listSkills = [
    { id: 1, image: "/src/assets/icons/logo-html.png", label: "HTML" },
    { id: 2, image: "/src/assets/icons/logo-css.png", label: "CSS" },
    { id: 3, image: "/src/assets/icons/logo-JS.png", label: "JavaScript" },
    { id: 4, image: "/src/assets/icons/logo-react.png", label: "React" },
    { id: 5, image: "/src/assets/icons/logo-java.png", label: "Java" },
    { id: 6, image: "/src/assets/icons/logo-git.png", label: "Git" },
    {
      id: 7,
      image: "/src/assets/icons/logo-Tailwind_CSS.png",
      label: "Tailwind CSS"
    },
    {
      id: 8,
      image:"/src/assets/icons/logo-mysql.png",
      label: "MySQL"
    }
    
  ];
  return (
    <section className="container mt-7">
      <div className="w-full">
        <div className="flex gap-2">
          <div
            className="w-7 h-7 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700"
            style={{
              mark: "url(/src/assets/icons/icon-code.svg) center/contain no-repeat",
              WebkitMask:
                "url(/src/assets/icons/icon-code.svg) center/contain no-repeat",
            }}
          ></div>
          <span className="flex items-center font-bold">Kỹ năng</span>
        </div>
        <div className="pt-4">
          <ul className="flex gap-3">
            {listSkills.map((item) => (
              <li
                key={item.id}
                className="flex gap-2 border items-center px-3 py-2 rounded-[10px] border-gray-300 shadow"
              >
                <img src={item.image} className="h-5" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
