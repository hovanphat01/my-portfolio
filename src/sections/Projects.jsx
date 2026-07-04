import Card from "../components/Card";

function Projects() {
  return (
    <section className="container mt-7">
      <div className="w-full">
        <div className="flex gap-2 pb-3">
          <div
            className="w-7 h-7 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700"
            style={{
              mark: "url(/src/assets/icons/icon-folder-open.svg) center/contain no-repeat",
              WebkitMask:
                "url(/src/assets/icons/icon-folder-open.svg) center/contain no-repeat",
            }}
          ></div>
          <span className="flex items-center font-bold">Dự án nổi bật</span>
        </div>
        <div className="flex justify-between">
            <Card/>   
            <Card/>   
            <Card/>   
        </div>
      </div>
    </section>
  );
}

export default Projects;
