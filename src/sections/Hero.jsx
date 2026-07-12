import Button from "../components/Button";
import imageAvatar from "../assets/images/1.jpg";
import iconGitub from "../assets/icons/icon-github.svg";
import iconLinkedin from "../assets/icons/icon-linkedin.svg";
import iconEnvelope from "../assets/icons/icon-envelope.svg";
function Hero() {
  return (
    <section className="container flex  flex-col lg:flex-row">
      <div className="hero-info ">
        <span className="my-role">
          <span className="w-2 h-2 bg-blue-600 rounded-4xl"></span>
          FULLSTACK DEVELOPER
        </span>
        <h1 className="text-5xl font-bold py-4 flex flex-col items-center">
          Xin chào, tôi là <br />
          <span className="bg-gradient-to-r from-logo-blue via-logo-purple-mid to-logo-purple bg-clip-text text-transparent text-7xl">
            Hồ Văn Phát
          </span>
        </h1>
        <p className="py-3 text-gray-400 text-justify">
          Tôi là sinh viên năm cuối với niềm đam mê xây dựng các ứng dụng web
          hiện đại, hiệu năng cao và trải nghiệm người dùng tuyệt vời. Tôi là
          người ham học hỏi, yêu thích tìm tòi và luôn chủ động tiếp cận các
          công nghệ mới. Mục tiêu của tôi là phát triển vững chắc kỹ năng
          Backend, từng bước mở rộng sang các công nghệ khác để trở thành một
          Fullstack Developer.
        </p>
        <div className="flex gap-4 py-5">
          <Button
            label="Xem dự án"
            icon="rocket"
            variant="project"
            onClick={() => console.log("Xem dự án")}
          />
          <Button
            label="Tải CV"
            icon="download"
            variant="CV"
            onClick={() => console.log("Tải CV")}
          />
        </div>
        <div className="flex gap-4 py-5">
          <a
            href="https://github.com/"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          >
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker: `url("${iconGitub}") center/contain no-repeat`,
                WebkitMask: `url("${iconGitub}") center/contain no-repeat`,
              }}
            ></div>
          </a>
          <a
            href="https://vn.linkedin.com/"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          >
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker: `url("${iconLinkedin}") center/contain no-repeat`,
                WebkitMask: `url("${iconLinkedin}") center/contain no-repeat`,
              }}
            ></div>
          </a>
          <a
            href="https://www.google.com/"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
          >
            <div
              className="bg-[#788397] w-full h-full"
              style={{
                marker: `url("${iconEnvelope}") center/contain no-repeat`,
                WebkitMask: `url("${iconEnvelope}") center/contain no-repeat`,
              }}
            ></div>
          </a>
        </div>
      </div>

      {/* This is Avatar  */}
      <div className="div-avatar">
        <img
          src={imageAvatar}
          alt="Ảnh chân dung"
          className="img-avatar "
        />
        <div className="hero-state">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Sẵn sàng làm việc
        </div>
      </div>
    </section>
  );
}

export default Hero;
