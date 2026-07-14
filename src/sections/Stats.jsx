import iconBriefcase from "../assets/icons/icon-briefcase.svg"
import iconCode from "../assets/icons/icon-code.svg"
import iconGroup from "../assets/icons/icon-user-group.svg"
import iconTrophy from "../assets/icons/icon-trophy.svg"
function Stats() {
    return(
        <section className="container mt-7">
            <div className="hidden xl:block w-full h-auto border border-gray-300 rounded-2xl shadow">   
                <ul className="flex justify-between px-5 py-6 gap-2">
                    <li className="flex w-full h-auto gap-3">
                        <div className="flex items-center justify-center border border-gray-300 rounded-4xl w-[60px] h-[60px] bg-[#DDEBFE]">
                            <div
                                className="w-[45px] h-[45px] bg-blue-600"
                                style={{
                                    mask:`url("${iconBriefcase}") center/contain no-repeat`,
                                    WebkitMask:`url("${iconBriefcase}") center/contain no-repeat`,
                                }}
                                >
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold">
                                1+
                            </h3>
                            <p className="text-xl text-gray-900">Năm kinh nghiệm</p>
                            <p className="text-gray-500">Làm việc và phát triển</p>
                        </div>
                    </li>
                    <li className="flex w-full h-auto gap-3">
                        <div className="flex items-center justify-center border border-gray-300 rounded-4xl w-[60px] h-[60px] bg-[#F2ecfd]">
                            <div
                                className="w-[45px] h-[45px] bg-[#9341FA]"
                                style={{
                                    mask:`url("${iconCode}") center/contain no-repeat`,
                                    WebkitMask:`url("${iconCode}") center/contain no-repeat`,
                                }}
                                >
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold">
                                1+
                            </h3>
                            <p className="text-xl text-gray-900">Dự án hoàn thành</p>
                            <p className="text-gray-500">Cá nhân và nhóm</p>
                        </div>
                    </li>
                    <li className="flex w-full h-auto gap-3">
                        <div className="flex items-center justify-center border border-gray-300 rounded-4xl w-[60px] h-[60px] bg-[#ECF6FC]">
                            <div
                                className="w-[45px] h-[45px] bg-[#2D82C8]"
                                style={{
                                    mask:`url("${iconGroup}") center/contain no-repeat`,
                                    WebkitMask:`url("${iconGroup}") center/contain no-repeat`,
                                }}
                                >
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold">
                                1+
                            </h3>
                            <p className="text-xl text-gray-900">Công nghệ</p>
                            <p className="text-gray-500">Luôn học hỏi mỗi ngày</p>
                        </div>
                    </li>
                    <li className="flex w-full h-auto gap-3">
                        <div className="flex items-center justify-center border border-gray-300 rounded-4xl w-[60px] h-[60px] bg-[#FAF7EF]">
                            <div
                                className="w-[45px] h-[45px] bg-[#F7DEA4]"
                                style={{
                                    mask:`url("${iconTrophy}") center/contain no-repeat`,
                                    WebkitMask:`url("${iconTrophy}") center/contain no-repeat`,
                                }}
                                >
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-semibold">
                                1+
                            </h3>
                            <p className="text-xl text-gray-900">Thành tựu</p>
                            <p className="text-gray-500">Vì sản phẩm chất lượng</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Stats