import iconLink from "../assets/icons/icon-arrow-up-right.svg";
import imgCard from "../assets/images/portfolio-card.png";

function Card() {
  return (
    <div className="item-card">
      <div className="flex p-[14px] gap-3">
        <img
          src={imgCard}
          alt=""
          className="img-card rounded-3xl "
        />
        <a href="https://hovanphat01.github.io/my-portfolio/" target="_blank" className="link-card hover:pointer-coarse">
          <div
            className="w-[30px] h-[30px] bg-gray-700"
            style={{
              mask: `url("${iconLink}") center/contain no-repeat`,
              WebkitMask: `url("${iconLink}") center/contain no-repeat`,
            }}
          ></div>
        </a>
      </div>
      <div className="content-card">
        <h4 className="font-bold text-xl pl-[14px] pb-[7px]">Web Portfolio</h4>
        <p className="px-[14px]  text-justify">
          Ứng dụng thương mại điện tử với đầy đủ tính năng: Đăng ký, đăng nhập,
          giỏ hàng, thanh toán
        </p>
        <div>
          <ul className="flex text-[12px] px-[14px] py-[14px] whitespace-nowrap flex-wrap gap-2">
            <li className=" rounded-[5px] px-[10px] py-1  bg-[#e2f1fb] shadow-2xs">
              <span className="text-[#2695ec] font-semibold">React</span>
            </li>
            <li className="rounded-[5px] px-[10px] py-1  bg-[#e9f2fc] shadow-2xs">
              <span className="text-[#6397f3] font-semibold">Tailwind CSS</span>
            </li>
            <li className="rounded-[5px] px-[10px] py-1  bg-[#ECF3F0] shadow-2xs">
              <span className="text-[#5d9653] font-semibold">Spring Boot</span>
            </li>
            <li className="rounded-[5px] px-[10px] py-1  bg-[#efebfb] shadow-2xs">
              <span className="text-[#A177E0] font-semibold">MySQL</span>
            </li>
            <li className="rounded-[5px] px-[10px] py-1  bg-[#efebfb] shadow-2xs">
              <span className="text-[#A177E0] font-semibold">MySQL</span>
            </li>
          </ul>
        </div>
        <a className="lg:hidden flex text-[14px] px-[14px] underline justify-center text-gray-500" href="https://hovanphat01.github.io/my-portfolio/" target="_blank">
            https://hovanphat01.github.io/my-portfolio/
        </a>
      </div>
    </div>
  );
}

export default Card;
