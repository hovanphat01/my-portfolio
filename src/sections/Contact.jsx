import iconFly from "../assets/icons/icon-plane.svg";
import iconEmail from "../assets/icons/icon-envelope.svg"
import iconGithub from "../assets/icons/icon-github.svg"
function Contact() {
  return (
    <section className="container mt-7">
      <div className="div-contact items-center gap-3 w-full h-auto px-5 py-5 border border-gray-300 rounded-xl shadow">
        <div>
          <div className="flex gap-3">
            <div
              className="w-[40px] h-[40px] bg-blue-400"
              style={{
                mask: `url("${iconFly}") center/contain no-repeat`,
                WebkitMask: `url("${iconFly}") center/contain no-repeat`,
              }}
            ></div>
            <span className="text-3xl font-semibold">Liên hệ</span>
          </div>
          <p className="pt-3 text-gray-400">
            Tôi luôn sẵn sàng lắng nghe những cơ hội mới và các dự án thú vị.
            Đừng ngần ngại kết nối với tôi
          </p>
        </div>
        
              <div className="link-contact flex gap-3">
            <div className="flex h-15 rounded-3xl items-center gap-2 border border-blue-300 px-3">
            <div
                className="w-[20px] h-[20px] bg-blue-400"
              style={{
                mask: `url("${iconEmail}") center/contain no-repeat`,
                WebkitMask: `url("${iconEmail}") center/contain no-repeat`,
              }}
            ></div>
            <span className="text-blue-400">hovanphat00@gmail.com</span>
        </div>
        <div className="flex h-15 rounded-3xl items-center gap-2 border border-black px-3">
            <div
                className="w-[20px] h-[20px] bg-black"
              style={{
                mask: `url("${iconGithub}") center/contain no-repeat`,
                WebkitMask: `url("${iconGithub}") center/contain no-repeat`,
              }}
            ></div>
            <span className="text-black">github.com/hovanphat01</span>
        </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
