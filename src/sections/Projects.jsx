import Card from "../components/Card";
import iconProject from "../assets/icons/icon-folder-open.svg";
function Projects() {
  return (
    <section className="container mt-7">
      <div className="w-full">
        <div className="flex gap-2 pb-3">
          <div
            className="w-7 h-7 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700"
            style={{
              mark: `url("${iconProject}") center/contain no-repeat`,
              WebkitMask: `url("${iconProject}") center/contain no-repeat`,
            }}
          ></div>
          <span className="flex items-center font-bold">Dự án nổi bật</span>
        </div>
        <div
          className="list-card "
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;
