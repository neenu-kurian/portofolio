import Chip from "./Chip";

const TimeLineCard = ({
  year,
  title,
  subtitle,
  content,
  isLeft,
  color,
  visible,
}: {
  year: string;
  title: string;
  subtitle: string;
  content: string;
  isLeft: boolean;
  color: string;
  visible: boolean;
}) => {
  return (
    <div
      className={`relative z-0 p-6 md:p-10 bg-white shadow-md rounded-2xl w-full md:w-auto flex-1 ${
        visible && isLeft ? "animate-move-left" : ""
      } ${visible && !isLeft ? "animate-move-right" : ""} ${
        isLeft 
          ? "md:absolute md:right-1/2 md:translate-x-3 md:mr-8" 
          : "md:absolute md:left-1/2 md:-translate-x-3 md:ml-8"
      }`}
    >
      <Chip item={year} color={color} textColor="text-white" />
      <h3 className="text-lg md:text-xl font my-3 md:my-5">{title} @ {subtitle}</h3>
      <p className="text-sm md:text-base text-gray-500">{content}</p>
    </div>
  );
};

export default TimeLineCard;
