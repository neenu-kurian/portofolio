interface IconChipProps {
  icon: React.ComponentType<{ className?: string }>;
  gradient?: string;
}

const IconChip = ({icon: Icon, gradient}: IconChipProps) => {
  return (
    <div className={`rounded-full inline-flex p-4 mb-5 shadow-lg ${gradient || 'bg-linear-to-r from-blue-500 to-purple-500'}`}>
        <Icon className="text-white text-xl" />
    </div>
  )
}

export default IconChip