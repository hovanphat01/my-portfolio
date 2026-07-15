import Button from "../components/Button";
import imageAvatar from "../assets/images/1.jpg";
import iconGitub from "../assets/icons/icon-github.svg";
import iconLinkedin from "../assets/icons/icon-linkedin.svg";
import iconEnvelope from "../assets/icons/icon-envelope.svg";
import fileCV from "../public/cv/HoVanPhat_Software-Developer-Intern_VN.pdf"
function Hero() {
  const xemDuAn = () =>
    (window.location.href = "https://github.com/hovanphat01");

  return (
    <section className="container flex  flex-col lg:flex-row">
      <div className="hero-info ">
        <span className="my-role">
          <span className="w-2 h-2 bg-blue-600 rounded-4xl"></span>
          FULLSTACK DEVELOPER
        </span>
        <h1>
          Xin chào, tôi là <br />
          <span> Hồ Văn Phát</span>
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
            onClick={xemDuAn}
          />
          <a href={fileCV} download="HoVanPhat_Software-Developer-Intern.pdf">
            <Button
              label="Tải CV"
              icon="download"
              variant="CV"
            />
          </a>
        </div>
        <div className="flex gap-4 py-5">
          <a
            href="https://github.com/hovanphat01"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
            target="_blank"
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
            href="https://www.linkedin.com/in/ho-phat-193b33264/"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
            target="_blank"
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
            href="https://mail.google.com/mail/?extsrc=mailto&url=mailto:hovanphat00@gmail.com"
            className="w-10 h-10 hover:opacity-75 transition duration-300"
            target="_blank"
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
        <img src={imageAvatar} alt="Ảnh chân dung" className="img-avatar " />
        <div className="hero-state">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Sẵn sàng làm việc
        </div>
      </div>
    </section>
  );
}

export default Hero;
