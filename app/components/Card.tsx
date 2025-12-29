import Chip from "./Chip"
import IconChip from "./IconChip"

const Card = ({icon, gradient, title, skills}: {icon: React.ComponentType<{ className?: string }>, gradient?: string, title: string, skills: Array<string>}) => {
  return (
    <div className="p-4 md:p-5 shadow-md border-gray-200 rounded-lg border h-full">
        <IconChip icon={icon} gradient={gradient}/>
        <h2 className="text-lg md:text-xl font-600 text-wrap mb-3 md:mb-5">{title}</h2>
        <div className="flex flex-wrap gap-1 md:gap-2">
        {skills.map((skill: string) => (
            <Chip key={skill} item={skill} />
        ))}
        </div>
    </div>
  )
}

export default Card