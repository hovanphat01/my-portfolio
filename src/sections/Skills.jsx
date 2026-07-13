import iconHTML from "../assets/icons/logo-html.png";
import iconCSS from "../assets/icons/logo-css.png";
import iconJS from "../assets/icons/logo-JS.png";
import iconReact from "../assets/icons/logo-react.png";
import iconJava from "../assets/icons/logo-java.png";
import iconGit from "../assets/icons/logo-git.png";
import iconTailwind from "../assets/icons/logo-Tailwind_CSS.png";
import iconSQL from "../assets/icons/logo-mysql.png";
import iconCode from "../assets/icons/icon-code.svg";
import { useRef } from "react";
function Skills() {
  const listSkills = [
    { id: 1, image: iconHTML, label: "HTML" },
    { id: 2, image: iconCSS, label: "CSS" },
    { id: 3, image: iconJS, label: "JavaScript" },
    { id: 4, image: iconReact, label: "React" },
    { id: 5, image: iconJava, label: "Java" },
    { id: 6, image: iconGit, label: "Git" },
    {
      id: 7,
      image: iconTailwind,
      label: "Tailwind CSS",
    },
    {
      id: 8,
      image: iconSQL,
      label: "MySQL",
    },
    {
      id: 9,
      image: iconSQL,
      label: "MySQL",
    },
    {
      id: 10,
      image: iconSQL,
      label: "MySQL",
    },
    {
      id:11,
      image: iconSQL,
      label: "MySQL",
    },
  ];

  const scrollRef = useRef(null);
  // Hàm xử lý cuộn sang trái/phải
  const scroll = (direction) => {

    if (scrollRef.current) {
      const {scrollLeft, clientWidth} = scrollRef.current;
      const scrollTo = direction === 'left' 
            ? scrollLeft - clientWidth / 2 
            : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })
    }
  };


  return (
    <section className="container mt-7">
      <div className="w-full">
        <div className="flex gap-2">
          <div
            className="w-7 h-7 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700"
            style={{
              mark: `url("${iconCode}") center/contain no-repeat`,
              WebkitMask: `url("${iconCode}") center/contain no-repeat`,
            }}
          ></div>
          <span className="flex items-center font-bold">Kỹ năng</span>
        </div>

        <div className="pt-4 flex">
          <div className="btn-left">
            <button
              onClick={() => scroll('left')}
              className="hover:cursor-pointer"
            >{'<'}</button>
          </div>
          <ul
            ref={scrollRef}
            className="list-items overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {listSkills.map((item) => (
              <li key={item.id} className="item-skills">
                <img src={item.image} className="h-5" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="btn-right">
            <button
              onClick={() => scroll('right')}
              className="hover:cursor-pointer"
            >{'>'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
