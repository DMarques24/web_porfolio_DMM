import "./CareerTimeline.css";
type CareerEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
};
type CareerTimelineProps = { events?: CareerEvent[] };
const defaultEvents: CareerEvent[] = [
  {
    id: 1,
    date: "2022",
    title: "Primeiro contacto com programação",
    description: "Comecei a aprender HTML, CSS e JavaScript.",
  },
  {
    id: 2,
    date: "2023",
    title: "Primeiro projeto",
    description: "Desenvolvi o meu primeiro projeto pessoal com React.",
  },
  {
    id: 3,
    date: "2024",
    title: "Frontend Developer",
    description:
      "Comecei a trabalhar profissionalmente como Frontend Developer.",
  },
  {
    id: 4,
    date: "2025",
    title: "Full Stack Developer",
    description: "Passei a trabalhar também com Node.js e bases de dados.",
  },
];
function CareerTimeline({ events = defaultEvents }: CareerTimelineProps) {
  return (
    <div className="timeline">
      {" "}
      {events.map((event) => (
        <div className="timelineItem" key={event.id}>
          {" "}
          <div className="timelinePoint" />{" "}
          <div className="timelineContent">
            {" "}
            <span className="timelineDate"> {event.date} </span>{" "}
            <h2>{event.title}</h2> <p>{event.description}</p>{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default CareerTimeline;
