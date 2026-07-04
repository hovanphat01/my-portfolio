function AboutMe() {
  return (
    <section className="container mt-10">
      <div className="border rounded-[12px] py-5 flex shadow-sm border-gray-200">
        <div className="w-3/4 flex gap-3 pl-5">
          <div className="bg-gray-200 rounded-4xl h-12 w-12 flex justify-center items-center">
            <div
              className="h-10 w-10 bg-blue-500"
              style={{
                mask: "url(/src/assets/icons/icon-about.svg) center/contain no-repeat",
                WebkitMask:
                  "url(/src/assets/icons/icon-about.svg) center/contain no-repeat",
              }}
            ></div>
          </div>
          <span className="text-black font-bold text-[20px] w-15 h-12 flex items-center">Về tôi</span>
        </div>
        <div>
          <p className="text-gray-500 text-justify pr-10">
            Tôi là người ham học hỏi, yêu thích tìm tòi và luôn chủ động tiếp
            cận các công nghệ mới. Mục tiêu của tôi là phát triển vững chắc kỹ
            năng Backend, từng bước mở rộng sang các công nghệ khác để trở thành
            một Fullstack Developer. Trong vòng 5 năm tới, tôi phấn đấu đạt được
            vị trí Senior Fullstack Engineer, đồng thời tích lũy kinh nghiệm và
            kỹ năng để chuẩn bị cho kế hoạch học tập, nghiên cứu bậc cao học tại
            nước ngoài trong tương lai.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
