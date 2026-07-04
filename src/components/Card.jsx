function Card(){
    return(
        <div className="w-[325px] h-auto border border-gray-200 rounded-2xl shadow">
            <div className="flex p-[14px] gap-3">
                <img src="/src/assets/images/portfolio-card.png" alt="" className="w-[250px] h-[150px] rounded-3xl "/>
                <a href="/" className="w-full h-full  hover:pointer-coarse hover:opacity-65">
                    <div 
                        className="w-[30px] h-[30px] bg-gray-700"
                        style={{
                        WebkitMask:"url(/src/assets/icons/icon-arrow-up-right.svg) center/contain no-repeat"
                    }}></div>
                </a>
            </div>  
            <h4 className="font-bold text-xl pl-[14px] pb-[7px]">E-Commerce Web</h4>
            <p className="px-[14px] text-[14px] text-justify">Ứng dụng thương mại điện tử với đầy đủ tính năng: Đăng ký, đăng nhập, giỏ hàng, thanh toán</p>
            <div>
                <ul className="flex text-[12px] justify-between px-[14px] py-[14px]">
                    <li className=" rounded-[5px] px-[10px] py-1  bg-[#e2f1fb] shadow-2xs"><span className="text-[#2695ec] font-semibold">React</span></li>
                    <li className="rounded-[5px] px-[10px] py-1  bg-[#e9f2fc] shadow-2xs"><span className="text-[#6397f3] font-semibold">Tailwind CSS</span></li>
                    <li className="rounded-[5px] px-[10px] py-1  bg-[#ECF3F0] shadow-2xs"><span className="text-[#5d9653] font-semibold">Spring Boot</span></li>
                    <li className="rounded-[5px] px-[10px] py-1  bg-[#efebfb] shadow-2xs"><span className="text-[#A177E0] font-semibold">MySQL</span></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Card