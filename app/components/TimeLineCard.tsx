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
      className={`absolute z-0 p-6 md:p-10 bg-white shadow-md mb-3 bottom-[25%] rounded-2xl w-5/6 md:w-auto ${
        visible && isLeft ? "animate-move-left" : ""
      } ${visible && !isLeft ? "animate-move-right" : ""} ${
        isLeft 
          ? "md:right-1/2 md:translate-x-3 md:mr-8 right-4" 
          : "md:left-1/2 md:-translate-x-3 md:ml-8 right-4"
      }`}
    >
      <Chip item={year} color={color} textColor="text-white" />
      <h3 className="text-lg md:text-xl font my-3 md:my-5">{title} @ {subtitle}</h3>
      <p className="text-sm md:text-base text-gray-500">{content}</p>
    </div>
  );
};

export default TimeLineCard;
