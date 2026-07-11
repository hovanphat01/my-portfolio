import Button from "../components/Button";

function Hero() {

  return (
    <section className="container flex ">
      <div className="flex flex-col w-1/2 ">
        <span
          className="
            inline-flex items-center w-fit gap-2 text-sm bg-blue-50/50 text-blue-600 border border-blue-300 rounded-3xl px-3 py-1 font-semibold tracking-wider
          "
        >
          <span className="w-2 h-2 bg-blue-600 rounded-4xl"></span>
          FULLSTACK DEVELOPER
        </span>
        <h1 className="text-5xl font-bold py-4">
          Xin chào, tôi là <br />
          <span className="bg-gradient-to-r from-logo-blue via-logo-purple-mid to-logo-purple bg-clip-text text-transparent text-7xl">
            Hồ Văn Phát
          </span>
        </h1>
        <p className="py-3 text-gray-400 text-justify">
          Tôi là sinh viên năm cuối với niềm đam mê xây dựng các ứng dụng web
          hiện đại, hiệu năng cao và trải nghiệm người dùng tuyệt vời.
        </p>
        <div className="flex gap-4 py-5">
          <Button label="Xem dự án" icon="rocket" variant="project" onClick={() => console.log("Xem dự án")} />
          <Button label="Tải CV" icon="download" variant="CV" onClick={() => console.log("Tải CV")} />
        </div>
        <div className="flex gap-4 py-5">
          <a href="https://github.com/" className="w-10 h-10 hover:opacity-75 transition duration-300">
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker:"url('/src/assets/icons/icon-github.svg') center/contain no-repeat",
                WebkitMask:"url('/src/assets/icons/icon-github.svg') center/contain no-repeat",
              }}
            ></div>
          </a>
          <a href="https://vn.linkedin.com/" className="w-10 h-10 hover:opacity-75 transition duration-300">
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker:"url('/src/assets/icons/icon-linkedin.svg') center/contain no-repeat",
                WebkitMask:"url('/src/assets/icons/icon-linkedin.svg') center/contain no-repeat",
              }}
            ></div>
          </a>
          <a href="https://www.google.com/" className="w-10 h-10 hover:opacity-75 transition duration-300">
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker:"url('/src/assets/icons/icon-envelope.svg') center/contain no-repeat",
                WebkitMask:"url('/src/assets/icons/icon-envelope.svg') center/contain no-repeat",
              }}
            ></div>
          </a>
        </div>

      </div>

      <div className="relative w-1/2  px-20">
        <img 
          src="/public/images/1.jpg" 
          alt="Ảnh chân dung" 
          className="w-[300px] h-full object-cover rounded-3xl absolute right-0 shadow-2xl" 
        />
        <div className="absolute bottom-5 right-15  flex items-center gap-2 bg-black/40 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full border border-white/10">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Sẵn sàng làm việc
        </div>
      </div>
    </section>
  );
}

export default Hero;
